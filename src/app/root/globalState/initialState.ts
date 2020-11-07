import { StateType } from "./context"

export const initialState: StateType = {
  merchantsInventory: [],
  transactions: [],
  balance: 0,
  searchKeyword: "",
  sortingCriteria: "DATE",
  sortingDirection: "DESC",
  transferAccount: "",
  transferAmount: "",
  missingAccount: false,
  missingAmount: false,
  showPreview: false,
}
