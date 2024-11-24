import { expect, stub } from 'lovecraft';
import chalk from 'chalk';

import { Exit } from './exit.js';
import terminal from './terminal.js';
import assistant from './assistant.js';

describe('assistant', () => {
  let wrapped;
  let a;

  beforeEach(() => {
    wrapped = { converse: stub() };
    wrapped.converse.resolves('Oh, hello');
    a = assistant(wrapped);
    stub(terminal, 'input');
    stub(terminal, 'output');
  });

  afterEach(() => {
    terminal.input.restore();
    terminal.output.restore();
  });

  it('converse calls output', async () => {
    await a.converse([], 'Hello!');
    expect(terminal.input.callCount).to.equal(0);
    expect(terminal.output.callCount).to.equal(1);
    expect(terminal.output.lastCall.args[0]).to.equal(`\n${chalk.green('Oh, hello')}\n\n`);
  });
});
