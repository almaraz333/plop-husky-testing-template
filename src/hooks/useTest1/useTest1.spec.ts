/// <reference types="jest" />

import { useTest1 } from './useTest1';

jest.mock("./useTest1", () => ({
  useTest1: () => true
}));

describe('useTest1 test', () => {
  it('exists', () => {
   expect(useTest1).toBeDefined();
  })
})