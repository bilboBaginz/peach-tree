const testSuiteRecentTransaction = [
  {
    testName: "User searches online tansfers",
    arrange: (cy) => {
      cy.get('input[placeholder="Search by typing..."]').type("online transfer")
    },
    assert: (cy) => {
      cy.get("ul").within(() => {
        cy.get("li").should("have.length", 3)
      })
    },
  },
  {
    testName: "User searches backbase",
    arrange: (cy) => {
      cy.get('input[placeholder="Search by typing..."]').type("backbase")
    },
    assert: (cy) => {
      cy.get("ul").within(() => {
        cy.get("li").should("have.length", 1)
      })
    },
  },
  {
    testName: "User sorts by amount desc",
    act: (cy) => {
      cy.get("button").contains("AMOUNT").click()
    },
    assert: (cy) => {
      cy.get("ul").within(() => {
        cy.get("li").first().should("contain", "€5000")
      })
    },
  },
  {
    testName: "User changes sorting direction for amount",
    act: (cy) => {
      cy.get("button").contains("AMOUNT").click()
      cy.get("button").contains("AMOUNT").click()
    },
    assert: (cy) => {
      cy.get("ul").within(() => {
        cy.get("li").first().should("contain", "€19.72")
      })
    },
  },
]

describe("recent-transations-list-integration-tests", () => {
  beforeEach(() => {
    cy.reload()
    cy.visit("/")
    window.localStorage.clear()
    window.localStorage.setItem("balance", 5824.76)
  })

  testSuiteRecentTransaction.map(({ testName, arrange, act, assert }) => {
    it(testName, () => {
      arrange && arrange(cy)
      act && act(cy)
      assert && assert(cy)
    })
    return null
  })
})
