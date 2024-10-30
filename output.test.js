import { expect, stub } from 'lovecraft';
import output from './output.js';

describe('output', () => {
  beforeEach(() => {
    stub(process.stdout, 'write');
  });

  afterEach(() => {
    process.stdout.write.restore();
  });

  it('should write to stdout', () => {
    output('Hello, world!');
    expect(process.stdout.write).to.have.been.calledWith('Hello, world!');
  });
});