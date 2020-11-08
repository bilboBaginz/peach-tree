const testSuitePreviewPopup = [
  {
    testName: "User fills in a valid transfer and confirms in popup",
    arrange: (cy) =>
      cy.get("form").within(() => {
        cy.get('input[aria-label="TO ACCOUNT"]').type("The tea Lounge")
        cy.get('input[aria-label="AMOUNT"]').type("6324.76")
      }),
    act: (cy) => {
      cy.get("button").contains("SUBMIT").click()
      cy.get("button").contains("TRANSFER").click()
    },
    assert: (cy) => {
      cy.get("ul").within(() => {
        cy.get("li").first().should("contain", "€6324.76")
      })
    },
  },
]

describe("transfer-preview-popup-integration-tests", () => {
  beforeEach(() => {
    cy.visit("/")
    window.localStorage.clear()
    window.localStorage.setItem("balance", 5824.76)
  })

  testSuitePreviewPopup.map(({ testName, arrange, act, assert }) => {
    it(testName, () => {
      arrange && arrange(cy)
      act && act(cy)
      assert && assert(cy)
    })
    return null
  })
})
