import { expect, stub } from 'lovecraft';
import hierophant from 'hierophant';
import conversations from 'phantomaton-conversations';
import system from 'phantomaton-system';
import priestess from 'priestess';

import terminal from './terminal.js';

import cli from './phantomaton-cli.js';


class Assistant {
  converse() {
    return 'okay...';
  }
}

describe('phantomaton-cli', () => {
  let container, input;
  
  beforeEach(() => {
    container = hierophant();
    input = stub().returns('System prompt');
    conversations().install.forEach(c => container.install(c));
    system().install.forEach(c => container.install(c));
    container.install(conversations.assistant.provider([], () => () => new Assistant()));
    container.install(priestess.input.resolver());
    container.install(priestess.start.resolver());
    container.install(priestess.input.provider([], () => input));
    stub(terminal, 'input').resolves('Hi!');
    stub(terminal, 'output');
  });

  afterEach(() => {
    terminal.input.restore();
    terminal.output.restore();
  });

  it('installs a user and start behavior', async () => {
    cli().install.forEach(c => container.install(c));

    const [user] = container.resolve(conversations.user.resolve);
    expect(user).to.be.an('object');

    const [start] = container.resolve(priestess.start.resolve);
    expect(start).to.be.a('function');

    await user.converse([]);

    expect(input.callCount).to.equal(0);
  });

  it('inspects system prompt when debug is true', async () => {
    cli({ debug: true }).install.forEach(c => container.install(c));

    const [user] = container.resolve(conversations.user.resolve);
    expect(user).to.be.an('object');

    const [start] = container.resolve(priestess.start.resolve);
    expect(start).to.be.a('function');

    console.log(container.resolve(system.system.provide));

    await user.converse([]);

    expect(input.callCount).to.equal(1);
  });
});
