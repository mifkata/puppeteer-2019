const puppeteer = require('puppeteer');
const path = require('path');

const source = process.argv[2] || 'https://dir.bg';
const output = path.resolve(__dirname, '..', 'output', 'screenshot.png');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(source, { timeout: 0, waitUntil: 'networkidle2' });
  await page.screenshot({ path: output });

  await browser.close();
})();
