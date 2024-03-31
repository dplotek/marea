import puppeteer, { Browser } from 'puppeteer';

const main = async () => {
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://google.com");

};

main();