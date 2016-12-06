import dotenv from 'dotenv';
import chalk from 'chalk';
import { db, fetchAndSavePosts } from './lib';

dotenv.config({ silent: true });

function logError(error) {
  console.error(chalk.black.bgRed(' ERROR '), error);
}

async function main() {
  await db.syncDb();
  await fetchAndSavePosts();
}

main().catch(logError);

