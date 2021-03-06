import { MinimumBalance, TransactionCap } from "../../root/app.config"

export const amountIsNotValid = (amount: string): boolean => Number.isNaN(+amount)

export const amountIsTooLarge = (amount: string): boolean => +amount > TransactionCap

export const fieldsAreMissing = (amount: string, account: string): boolean =>
  amount.trim() === "" || account.trim() === ""

export const isOverDraftLimitReached = (balance: number, amount: string): boolean =>
  balance - +amount < MinimumBalance
