import { Criteria, Direction } from "../../root/globalState/context"
import { Transaction } from "./recent-transactions-list-types"

export const sortAscOnDate = (a: Transaction, b: Transaction): number => {
  const entryA = a.dates.valueDate
  const entryB = b.dates.valueDate
  return entryA - entryB
}

export const sortDescOnDate = (a: Transaction, b: Transaction): number => {
  const entryA = a.dates.valueDate
  const entryB = b.dates.valueDate
  return entryB - entryA
}

export const sortAscOnAmount = (a: Transaction, b: Transaction): number => {
  const entryA = a.transaction.amountCurrency.amount
  const entryB = b.transaction.amountCurrency.amount
  return entryA - entryB
}

export const sortDescOnAmount = (a: Transaction, b: Transaction): number => {
  const entryA = a.transaction.amountCurrency.amount
  const entryB = b.transaction.amountCurrency.amount
  return entryB - entryA
}

export const sortAscOnBenificiary = (a: Transaction, b: Transaction): number => {
  return a.merchant.name.localeCompare(b.merchant.name)
}

export const sortDescOnBenificiary = (a: Transaction, b: Transaction): number => {
  return b.merchant.name.localeCompare(a.merchant.name)
}

export interface SortingFunction {
  sortingFunc: (a: Transaction, b: Transaction) => number
  criteria: Criteria
  direction: Direction
}

export const compareFunctionMapper: Array<SortingFunction> = [
  {
    sortingFunc: sortAscOnDate,
    criteria: "DATE",
    direction: "ASC",
  },
  {
    sortingFunc: sortDescOnDate,
    criteria: "DATE",
    direction: "DESC",
  },
  {
    sortingFunc: sortAscOnAmount,
    criteria: "AMOUNT",
    direction: "ASC",
  },
  {
    sortingFunc: sortDescOnAmount,
    criteria: "AMOUNT",
    direction: "DESC",
  },
  {
    sortingFunc: sortAscOnBenificiary,
    criteria: "BENEFICIARY",
    direction: "ASC",
  },
  {
    sortingFunc: sortDescOnBenificiary,
    criteria: "BENEFICIARY",
    direction: "DESC",
  },
]
