import conversations from 'phantomaton-conversations';
import priestess from 'priestess';

import assistant from './assistant.js';
import start from './start.js';
import user from './user.js';

const cli = () => ({
  install: [    
    conversations.assistant.decorator([], () => assistant),
    conversations.user.provider([], user),
    priestess.start.provider(
      [conversations.conversation.resolve],
      ([conversation]) => () => start(conversation([]))
    )
  ]
});

export default cli;
