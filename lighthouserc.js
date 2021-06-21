// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      staticDistDir: ".next/",
      budgetPath: "./budget.json",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        // This setting asserts that the budgets audit passed in Lighthouse CI
        // under 3 sec on slow 3G connection
        "performance-budget": "error",
      },
    },
  },
};
