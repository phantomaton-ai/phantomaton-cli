import { expect, stub } from 'lovecraft';
import input from './input.js';
import output from './output.js';

describe('input', () => {
  beforeEach(() => {
    stub(process.stdin, 'on');
    stub(output);
  });

  afterEach(() => {
    process.stdin.on.restore();
    output.restore();
  });

  it('should handle single-line input', async () => {
    process.stdin.on.callsFake((event, callback) => {
      if (event === 'data') {
        callback(Buffer.from('Hello\n'));
      }
    });

    const result = await input('Enter input: ');
    expect(result).to.equal('Hello');
    expect(output).to.have.been.calledWith('Enter input: ');
  });

  it('should handle multi-line input', async () => {
    process.stdin.on.callsFake((event, callback) => {
      if (event === 'data') {
        callback(Buffer.from('Hello\\\nWorld\n'));
      }
    });

    const result = await input('Enter input: ');
    expect(result).to.equal('Hello\nWorld');
    expect(output).to.have.been.calledWith('Enter input: ');
  });

  it('should handle "exit" command', async () => {
    process.stdin.on.callsFake((event, callback) => {
      if (event === 'data') {
        callback(Buffer.from('exit\n'));
      }
    });

    await expect(input('Enter input: ')).to.be.rejectedWith('Process exited');
    expect(output).to.have.been.calledWith('Enter input: ');
  });
});