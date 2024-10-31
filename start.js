import output from './output.js';

const start = async (conversation) => {
  while (true) {
    try {
      await conversation.advance();
    } catch (error) {
      output(error.message);
      break;
    }
  }
  process.exit();
};

export default start;
