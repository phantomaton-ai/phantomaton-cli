const start = async (conversation) => {
  while (true) {
    try {
      await conversation.advance();
    } catch (error) {
      console.log(error);
      break;
    }
  }
  process.exit();
};

export default start;
