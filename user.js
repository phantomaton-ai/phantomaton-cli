import chalk from 'chalk';

import input from './input.js';

class User {
  converse(turns) {
    if (turns.length > 0) {
      const { reply } = turns[turns.length - 1];
      output(`\n${chalk.green(reply)}\n\n`);
    }
    const message = await input('> ');
    if (message === 'exit') process.exit();
    return message;
  }
}

export default () => new User();