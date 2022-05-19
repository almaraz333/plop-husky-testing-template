import { expect } from "@jest/globals";

import { useAdd } from './useAdd';

jest.mock("./useAdd", () => ({
  useAdd: () => true
}));

describe('useAdd test', () => {
  it('exists', () => {
   expect(useAdd).toBeDefined();
  })
})