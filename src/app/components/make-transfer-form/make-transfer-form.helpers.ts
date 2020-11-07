import { MinimumBalance, TransactionCap } from "../../root/app.config"

export const amountIsNotValid = (amount: string): boolean =>
  Number.isNaN(+amount) || +amount > TransactionCap

export const fieldsAreMissing = (amount: string, account: string): boolean =>
  amount === "" || account === ""

export const isOverDraftLimitReached = (balance: number, amount: string): boolean =>
  balance - +amount < MinimumBalance
