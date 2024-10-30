import { expect, stub } from 'lovecraft';

import input from './input.js';
import output from './output.js';
import terminal from './terminal.js';

describe('terminal', () => {
  it('re-exposes input and output', () => {
    expect(terminal.output).to.equal(output);
    expect(terminal.input).to.equal(input);
  });
});
