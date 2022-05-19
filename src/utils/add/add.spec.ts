import { expect } from "@jest/globals";

import { add } from './add';

describe('add test', () => {
  it('exists', () => {
   expect(add).toBeDefined();
  })
})