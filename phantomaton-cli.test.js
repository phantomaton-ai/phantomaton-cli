import { expect } from 'lovecraft';
import hierophant from 'hierophant';
import cli from './phantomaton-cli.js';
import conversations from 'phantomaton-conversations';
import priestess from 'priestess';

class Assistant {
  converse() {
    return 'okay...';
  }
}

describe('phantomaton-cli', () => {
  it('installs a user and start behavior', () => {
    const container = hierophant();
    conversations().install.forEach(c => container.install(c));
    cli().install.forEach(c => container.install(c));
    container.install(conversations.assistant.provider([], () => () => new Assistant()));
    container.install(priestess.start.resolver());

    const [user] = container.resolve(conversations.user.resolve);
    expect(user).to.be.an('object');

    const [start] = container.resolve(priestess.start.resolve);
    expect(start).to.be.a('function');
  });
});
