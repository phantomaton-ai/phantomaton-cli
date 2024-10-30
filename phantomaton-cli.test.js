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

    const [getUser] = container.resolve(conversations.user.resolve);
    const user = getUser();
    expect(user).to.be.an('object');

    const [getStart] = container.resolve(priestess.start.resolve);
    expect(getStart).to.be.a('function');
  });
});
