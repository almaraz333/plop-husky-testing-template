/// <reference types="jest" />

import { useTest2 } from './useTest2';

jest.mock("./useTest2", () => ({
  useTest2: () => true
}));

describe('useTest2 test', () => {
  it('exists', () => {
   expect(useTest2).toBeDefined();
  })
})