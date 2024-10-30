import { expect } from 'lovecraft';
import hierophant from 'hierophant';
import cli from './phantomaton-cli.js';
import conversations from 'phantomaton-conversations';
import priestess from 'priestess';

describe('phantomaton-cli', () => {
  it('installs components correctly', () => {
    const container = hierophant();
    cli().install.forEach(c => container.install(c));

    const [getUser] = container.resolve(conversations.user.resolve);
    const user = getUser();
    expect(user).to.be.an('object');

    const [getStart] = container.resolve(priestess.start.resolve);
    expect(getStart).to.be.a('function');
  });
});