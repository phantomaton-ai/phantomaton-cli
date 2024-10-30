import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import conversations from 'phantomaton-conversations';
import start from './start.js';

describe('start', () => {
  it('runs the conversation loop', async () => {
    const container = hierophant();
    conversations().install.forEach(c => container.install(c));

    const conversation = container.resolve(conversations.conversation.resolve)[0]();
    const conversationAdvanceSpy = stub(conversation, 'advance');

    await start(conversation);

    expect(conversationAdvanceSpy.callCount).to.be.greaterThan(0);
  });
});