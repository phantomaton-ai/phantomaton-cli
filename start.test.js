import { expect, stub } from 'lovecraft';
import exit from './exit.js';
import start from './start.js';

describe('start', () => {
  beforeEach(() => {
    stub(process.stdout, 'write');
    stub(process, 'exit');    
  });

  afterEach(() => {
    process.exit.restore();
    process.stdout.write.restore();
  });

  it('runs the conversation loop', async () => {
    const conversation = { advance: stub() };
    const promise = start(conversation);
    expect(conversation.advance.callCount).to.be.greaterThan(0);
    expect(process.exit.callCount).to.equal(0);
    conversation.advance.callsFake(exit);
    await promise;
    expect(process.stdout.write.callCount).to.equal(1);
    expect(process.exit.callCount).to.equal(1);
  });
});
