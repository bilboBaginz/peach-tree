const testSuiteMakeTransfer = [
  {
    testName: "User fills in a valid transfer",
    arrange: (cy) =>
      cy.get("form").within(() => {
        cy.get('input[aria-label="TO ACCOUNT"]').type("Bakbase")
        cy.get('input[aria-label="AMOUNT"]').type(500)
      }),
    act: (cy) => {
      cy.get("button").contains("SUBMIT").click()
      window.localStorage.setItem("balance", 5824.76)
    },
    assert: (cy) => {
      cy.get("button").should("contain", "TRANSFER")
      cy.get("div").should("contain", "TO ACCOUNT: Bakbase")
      cy.get("div").should("contain", "AMOUNT: €500")
    },
  },
  {
    testName: "User leaves field empty",
    arrange: (cy) =>
      cy.get("form").within(() => {
        cy.get('input[aria-label="AMOUNT"]').type(500)
      }),
    act: (cy) => {
      cy.get("button").contains("SUBMIT").click()
    },
    assert: (cy) => {
      cy.get("span").should("contain", " Required*")
      cy.get("span").should("have.css", "color", "rgb(255, 0, 0)")
    },
  },
  {
    testName: "User exceeds overdraft limit",
    arrange: (cy) =>
      cy.get("form").within(() => {
        cy.get('input[aria-label="TO ACCOUNT"]').type("Bakbase")
        cy.get('input[aria-label="AMOUNT"]').type(6324.77)
      }),
    act: (cy) => {
      cy.get("button").contains("SUBMIT").click()
    },
    assert: (cy) => {
      cy.get("span").should("contain", " Insufficient funds")
      cy.get("span").should("have.css", "color", "rgb(255, 0, 0)")
    },
  },
]

describe("make-transfer-integration-tests", () => {
  beforeEach(() => {
    cy.visit("/")
    window.localStorage.clear()
    window.localStorage.setItem("balance", 5824.76)
  })

  testSuiteMakeTransfer.map(({ testName, arrange, act, assert }) => {
    it(testName, () => {
      arrange && arrange(cy)
      act && act(cy)
      assert && assert(cy)
    })
    return null
  })
})
