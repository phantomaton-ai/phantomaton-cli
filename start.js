const start = async (conversation) => {
  while (true) {
    try {
      await conversation.advance();
    } catch (error) {
      break;
    }
  }
  process.exit();
};

export default start;
