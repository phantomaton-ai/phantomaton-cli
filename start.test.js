import { expect, stub } from 'lovecraft';
import chalk from 'chalk';
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

  it('runs the conversation until exit', async () => {
    const turn = { message: 'Hello!', reply: 'Hi.' };
    const conversation = { advance: stub().resolves(turn) };
    const promise = start(conversation);
    expect(conversation.advance.callCount).to.be.greaterThan(0);
    expect(process.exit.callCount).to.equal(0);
    conversation.advance.callsFake(exit);
    await promise;
    expect(process.stdout.write.firstCall.args[0])
      .to.equal('\n' + chalk.green('Hi.') + '\n\n');
    expect(process.stdout.write.callCount).to.equal(2);
    expect(process.exit.callCount).to.equal(1);
  });
});
