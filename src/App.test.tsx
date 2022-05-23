import { mount } from "@cypress/react";
import App from "./App";

describe("app test", () => {
  it("successfully gets content", () => {
    mount(<App />);
    cy.get("div").get("h1").contains("A template for fresh React Typescript projects including:");
  });
});
