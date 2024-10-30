import { expect, stub } from 'lovecraft';
import input from './input.js';

// Not in beforeEach, so we don't swallow test output
const stubs = () => {
  stub(process.stdin, 'on');
  stub(process.stdout, 'write');
};

const unstub = () => {
  process.stdin.on.restore();
  process.stdout.write.restore();  
};

describe('input', () => {
  it('handles single-line input', async () => {
    stubs();

    process.stdin.on.callsFake((event, callback) => {
      if (event === 'data') {
        callback(Buffer.from('Hello\n'));
      }
    });

    const result = await input('Enter input: ');
    expect(result).to.equal('Hello');
    expect(process.stdout.write.callCount).to.equal(1);
    expect(process.stdout.write.lastCall.args[0]).to.equal('Enter input: ');

    unstub();
  });

  it('handles multi-line input', async () => {
    stubs();
    
    process.stdin.on.callsFake((event, callback) => {
      if (event === 'data') {
        callback(Buffer.from('Hello\\\n'));
        callback(Buffer.from('World\n'));
      }
    });

    const result = await input('Enter input: ');
    expect(result).to.equal('Hello\nWorld');
    expect(process.stdout.write.callCount).to.equal(1);
    expect(process.stdout.write.lastCall.args[0]).to.equal('Enter input: ');

    unstub();
  });
});
