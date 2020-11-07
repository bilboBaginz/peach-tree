import { SavedMerchant } from "../../root/app.config"
import { Transaction } from "../recent-transactions-list/recent-transactions-list-types"

export const checkIfMerchangeExists = (
  acountName: string,
  merchantsInventory: Array<SavedMerchant>
): SavedMerchant | undefined =>
  merchantsInventory.find((merchant) => merchant.merchantName === acountName)

export const createNewMerchant = (account: string): SavedMerchant => ({
  merchantName: account,
  categoryCode: "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16)
  }),
  icon: "assets/icons/blank_icon.png",
})

export const createTransaction = (
  savedMerchant: SavedMerchant,
  amount: string
): Transaction => ({
  categoryCode: savedMerchant.categoryCode,
  transaction: {
    amountCurrency: {
      amount: +amount,
      currencyCode: "EUR",
    },
    type: "Online Transfer",
  },
  merchant: {
    name: savedMerchant.merchantName,
  },
  dates: {
    valueDate: Date.now(),
  },
})
