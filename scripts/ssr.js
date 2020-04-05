const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const framework = process.argv[2] || 'backbone';
const source = `http://todomvc.com/examples/${framework}/`;
const output = path.resolve(__dirname, '..', 'output', 'ssr-page.html') ;

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 1 });
  const page = await browser.newPage();

  await page.goto(source, { waitUntil: 'networkidle2' });
  const input = await page.$('input.new-todo');

  for(let i = 1; i < 11; i++) {
    await input.type(`Hello ${i}`);
    await input.press('Enter');
  }

  const html = await page.content();
  await browser.close();

  fs.writeFileSync(output, html);
})();
