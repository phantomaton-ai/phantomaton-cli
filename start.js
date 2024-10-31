import { Exit } from './exit.js';
import output from './output.js';

const start = async (conversation) => {
  while (true) {
    try {
      await conversation.advance();
    } catch (error) {
      if (!(error instanceof Exit)) console.error(error);
      else output(`${error.message}\n`);
      break;
    }
  }
  process.exit();
};

export default start;
