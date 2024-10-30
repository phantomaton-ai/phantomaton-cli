import { expect, stub } from 'lovecraft';

import exit, { Exit } from './exit.js';

describe('exit', () => {
  it('throws an Exit error', async () => {
    try {
      exit();
      expect.fail();  
    } catch (error) {
      expect(error).instanceOf(Exit);
    }
  });
});
