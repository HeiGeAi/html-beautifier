import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import test from 'node:test';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const chromeCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const chrome = chromeCandidates.find((candidate) => fs.existsSync(candidate));

test('demo does not overflow horizontally at a 390px mobile viewport', async (t) => {
  if (!chrome) {
    t.skip('Chrome or Chromium is required for the browser regression test');
    return;
  }

  const browser = await chromium.launch({ executablePath: chrome, headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.route(/^https?:/, (route) => route.abort());
    await page.goto(pathToFileURL(path.join(ROOT, 'examples', 'demo.html')).href, { waitUntil: 'load' });

    const metrics = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
    }));

    assert.equal(metrics.documentWidth, metrics.viewportWidth);
  } finally {
    await browser.close();
  }
});
