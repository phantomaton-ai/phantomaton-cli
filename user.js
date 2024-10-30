import chalk from 'chalk';

import exit from './exit.js';
import terminal from './terminal.js';

class User {
  async converse(turns) {
    if (turns.length > 0) {
      const { reply } = turns[turns.length - 1];
      terminal.output(`\n${chalk.green(reply)}\n\n`);
    }
    const message = await terminal.input('> ');
    if (message.trim() === 'exit') exit();
    return message;
  }
}

const user = () => new User();

export default user; 
