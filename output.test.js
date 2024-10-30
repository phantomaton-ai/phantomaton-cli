import { expect, stub } from 'lovecraft';
import output from './output.js';

describe('output', () => {
  beforeEach(() => {
    stub(process.stdout, 'write');
  });

  afterEach(() => {
    process.stdout.write.restore();
  });

  it('writes to stdout', () => {
    output('Hello, world!');
    expect(process.stdout.write.callCount).to.equal(1);
    expect(process.stdout.write.lastCall.args[0]).to.equal('Hello, world!');
  });
});