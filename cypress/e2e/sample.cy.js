import "cypress-axe";

describe("the setup-example page", () => {
  // Define at the top of the spec file or just import it
  function terminalLog(violations) {
    cy.task(
      "log",
      `${violations.length} accessibility violation${
        violations.length === 1 ? "" : "s"
      } ${violations.length === 1 ? "was" : "were"} detected`,
    );
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length,
      }),
    );

    cy.task("table", violationData);
  }
  // Now using Cypress/Testing-Library :)
  // https://testing-library.com/docs/cypress-testing-library/intro/ Extends cy so it uses some RTL syntax
  beforeEach(() => {
    // Load our app before starting each test case
    cy.visit("/");
    cy.injectAxe();
  });
  it("Has no detectable a11y violations on load (filtering to only include critical impact violations)", () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      terminalLog,
    );
  });

  it("loads the application", () => {
    cy.get("#__next").should("exist");
    // Visual regression snapshots are uploaded to BrowserStacks Percy which does dom change diffing
    cy.percySnapshot("Page loaded");
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      terminalLog,
    );
  });

  it("should find a headline with Hello World", () => {
    cy.findByRole("heading", { name: /hello world/i }).should("exist");
    cy.percySnapshot("finds the headline with Hello World");
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      terminalLog,
    );
  });

  it("should find my example component", () => {
    cy.findByRole("heading", { name: /i am an example component/i }).should(
      "exist",
    );
    cy.percySnapshot("finds the example component");
    cy.checkA11y(
      null,
      {
        includedImpacts: ["critical"],
      },
      terminalLog,
    );
  });
});
