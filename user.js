import chalk from 'chalk';

import exit from './exit.js';
import terminal from './terminal.js';

class User {
  async converse(turns) {
    const message = await terminal.input('> ');
    if (message.trim() === 'exit') exit();
    return message;
  }
}

const user = () => new User();

export default user; 
