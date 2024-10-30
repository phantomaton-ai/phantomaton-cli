import conversations from 'phantomaton-conversations';
import priestess from 'priestess';

import start from './start.js';
import user from './user.js';

const cli = () => ({
  install: [
    conversations.user.provider([], () => user),
    priestess.start.provider(
      [conversations.conversation.resolve],
      (conversation) => () => start(conversation([]))
    )
  ]
});

export default cli;
