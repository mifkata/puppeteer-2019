const puppeteer = require('puppeteer');

const source = process.argv[2] || 'https://dir.bg';
const output = 'output.png';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(source, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: output });

  await browser.close();
})();