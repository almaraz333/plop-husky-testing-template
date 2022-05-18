import { mount } from "@cypress/react";
import App from "./App";

describe("app test", () => {
  it("successfully gets content", () => {
    mount(<App />);
    cy.get("div").contains("An App");
  });
});
