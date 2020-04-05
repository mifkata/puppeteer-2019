const puppeteer = require('puppeteer');
const path = require('path');

const source = process.argv[2] || 'https://www.btv.bg';
const output = path.resolve(__dirname, '..', 'output', 'full-page.pdf');

console.log('Saving page as PDF:', source);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(source, { timeout: 0, waitUntil: 'networkidle2' });

  await page.waitFor('.gdpr-popup');
  await page.click('.gdpr-accept');

  await page.waitFor('.cc_banner.cc_container.cc_container--open');
  await page.click('.cc_btn.cc_btn_accept_all');

  await page.pdf({ path: output, format: 'A4' });

  await browser.close();
})();
