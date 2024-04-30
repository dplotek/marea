import { Page } from 'puppeteer';

const getMovieTile = async (page: Page): Promise<string> => {
  const movieTitleSelector = await page.waitForSelector('#title > h1 > yt-formatted-string');
  const title = await movieTitleSelector.evaluate(el => el.textContent);
  return title;
};

export default getMovieTile;