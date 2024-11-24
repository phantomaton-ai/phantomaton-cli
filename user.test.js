import { expect, stub } from 'lovecraft';
import chalk from 'chalk';

import { Exit } from './exit.js';
import terminal from './terminal.js';
import user from './user.js';

describe('user', () => {
  let u;

  beforeEach(() => {
    u = user();
    stub(terminal, 'input');
    stub(terminal, 'output');
  });

  afterEach(() => {
    terminal.input.restore();
    terminal.output.restore();
  });

  it('converse calls input', async () => {
    terminal.input.resolves('Hello');
    await u.converse([{ reply: 'Hi there!' }]);
    expect(terminal.input.callCount).to.equal(1);
    expect(terminal.input.lastCall.args[0]).to.equal('> ');
    expect(terminal.output.callCount).to.equal(0);
  });

  it('converse handles "exit" command', async () => {
    terminal.input.resolves('exit');
    try {
      await u.converse([]);
      expect.fail();  
    } catch (error) {
      expect(error).instanceOf(Exit);
    }
  });
});
