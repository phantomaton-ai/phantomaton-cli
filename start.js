import chalk from 'chalk';

import { Exit } from './exit.js';
import output from './output.js';

const start = async (conversation) => {
  while (true) {
    try {
      const { message, reply } = await conversation.advance();
      output(`\n${chalk.green(reply)}\n\n`);
    } catch (error) {
      if (!(error instanceof Exit)) console.error(error);
      else output(`${error.message}\n`);
      break;
    }
  }
  process.exit();
};

export default start;
