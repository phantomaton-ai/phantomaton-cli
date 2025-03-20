import conversations from 'phantomaton-conversations';
import system from 'phantomaton-system';
import priestess from 'priestess';

import start from './start.js';
import debug from './debug.js';
import user from './user.js';

const cli = (options = { debug: false }) => ({
  install: [    
    conversations.user.provider(
      [],
      user
    ),

    ...(options.debug ? [conversations.user.decorator(
      [system.system.resolve],
      ([system]) => user => debug(system, user)
    )] : []),

    priestess.start.provider(
      [conversations.conversation.resolve],
      ([conversation]) => () => start(conversation([]))
    )
  ]
});

export default cli;
