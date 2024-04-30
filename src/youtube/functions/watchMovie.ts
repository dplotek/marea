import { Page } from 'puppeteer';
import getMovieTile from '../utils/getMovieTitle';
const chalk = require('chalk');

const watchMovie = async (page: Page, url: string) => {
  await page.goto(url);

  const movieTitle = await getMovieTile(page);
  console.log(chalk.red(`Watching ${movieTitle}`));
};

export default watchMovie;