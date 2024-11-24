import chalk from 'chalk';

import exit from './exit.js';
import terminal from './terminal.js';

class Assistant {
  constructor(assistant) {
    this.assistant = assistant;
  }

  async converse(turns, message) {
    const reply = await this.assistant.converse(turns, message);
    terminal.output(`\n${chalk.green(reply)}\n\n`);
    return reply;
  }
}

const assistant = (decorated) => new Assistant(decorated);

export default assistant; 
