import chalk from 'chalk';

import exit from './exit.js';
import terminal from './terminal.js';

class Debug {
  constructor(system, user) {
    this.system = system;
    this.user = user;
  }

  async converse(turns) {
    const message = await this.user.converse(turns);
    terminal.output(`\n${chalk.blue(this.system())}\n\n`);
    return message;
  }
}

const debug = (system, user) => new Debug(system, user);

export default debug; 
