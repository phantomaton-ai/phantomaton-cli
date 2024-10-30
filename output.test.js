import { expect, stub } from 'lovecraft';
import output from './output.js';

describe('output', () => {
  it('writes to stdout', () => {
    stub(process.stdout, 'write');

    output('Hello, world!');
    expect(process.stdout.write.callCount).to.equal(1);
    expect(process.stdout.write.lastCall.args[0]).to.equal('Hello, world!');

    process.stdout.write.restore();
  });
});