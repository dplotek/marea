import puppeteer, { Browser } from 'puppeteer';
import watchMovie from './youtube/functions/watchMovie';

const main = async () => {
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // await watchMovie(page, );
};

main();