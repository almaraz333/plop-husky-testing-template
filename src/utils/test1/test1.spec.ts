/// <reference types="jest" />

import { test1 } from './test1';

describe('test1 test', () => {
  it('exists', () => {
   expect(test1).toBeDefined();
  })
})