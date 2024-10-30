import { expect, stub } from 'lovecraft';
import chalk from 'chalk';
import input from './input.js';
import output from './output.js';
import user from './user.js';

describe('user', () => {
  let user;

  beforeEach(() => {
    stub(input);
    stub(output);
    user = new user();
  });

  afterEach(() => {
    input.restore();
    output.restore();
  });

  it('converse() calls input and output', async () => {
    input.resolves('Hello');
    await user.converse([{ reply: 'Hi there!' }]);
    expect(input).to.have.been.calledWith('> ');
    expect(output).to.have.been.calledWith(`\n${chalk.green('Hi there!')}\n\n`);
  });

  it('converse() handles "exit" command', async () => {
    input.resolves('exit');
    await expect(user.converse([])).to.be.rejectedWith('Process exited');
  });
});