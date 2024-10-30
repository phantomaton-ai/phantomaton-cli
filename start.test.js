import { expect, stub } from 'lovecraft';
import exit from './exit.js';
import start from './start.js';

describe('start', () => {
  it('runs the conversation loop', async () => {
    stub(process, 'exit');
    const conversation = { advance: stub() };
    const promise = start(conversation);
    expect(conversation.advance.callCount).to.be.greaterThan(0);
    expect(process.exit.callCount).to.equal(0);
    conversation.advance.callsFake(exit);
    await promise;
    expect(process.exit.callCount).to.equal(1);
  });
});
