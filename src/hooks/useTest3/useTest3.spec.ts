/// <reference types="jest" />

import { useTest3 } from './useTest3';

jest.mock("./useTest3", () => ({
  useTest3: () => true
}));

describe('useTest3 test', () => {
  it('exists', () => {
   expect(useTest3).toBeDefined();
  })
})