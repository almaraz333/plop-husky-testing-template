import { mount } from "@cypress/react";
import { Test } from ".";

describe('Test test', () => {
  it('successfully gets content', () => {
    mount( <Test />);
    cy.contains('Test');
  });
});
