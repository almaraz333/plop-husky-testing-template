import { mount } from "@cypress/react";
import { PatientTable } from ".";

describe('PatientTable test', () => {
  it('successfully gets content', () => {
    mount( <PatientTable />);
    cy.get('div').contains('PatientTable');
  });
});
