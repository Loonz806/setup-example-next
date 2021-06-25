import "cypress-axe";

describe("the setup-example page", () => {
  // Now using Cypress/Testing-Library :)
  beforeEach(() => {
    // Load our app before starting each test case
    cy.visit("/");
    cy.injectAxe();
  });
  it("Has no detectable a11y violations on load (filtering to only include critical impact violations)", () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(null, {
      includedImpacts: ["critical"],
    });
  });

  it("loads the application", () => {
    cy.get("#__next").should("exist");
    cy.percySnapshot("Page loaded");
    cy.checkA11y();
  });
});
