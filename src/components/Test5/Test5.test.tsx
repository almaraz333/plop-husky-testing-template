import { mount } from "@cypress/react";
import { Test5 } from ".";

describe('Test5 test', () => {
  it('successfully gets content', () => {
    mount( <Test5 />);
    cy.contains('Test5');
  });
});
