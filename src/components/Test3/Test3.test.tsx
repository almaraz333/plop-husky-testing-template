import { mount } from "@cypress/react";
import { Test3 } from ".";

describe('Test3 test', () => {
  it('successfully gets content', () => {
    mount( <Test3 />);
    cy.contains('Test3');
  });
});
