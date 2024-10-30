const start = async (conversation) => {
  while (true) await conversation.advance();
};

export default start;
