import { toFixedNumber } from "../../components/recent-transactions-list/components/transaction-row/transaction-row.helpers"
import { DispatchType, StateType } from "./context"

export enum ActionTypes {
  // user actions in recent transactions card
  USER_UPDATES_SARCH_KEYOWORD = "USER_UPDATES_SARCH_KEYOWORD",
  USER_CHANGES_SORTING_DIRECTION = "USER_CHANGES_SORTING_DIRECTION",
  USER_CHANGES_SORTING_CRITERIA = "USER_CHANGES_SORTING_CRITERIA",
  USER_CLEARS_SEARCH_KEYWORD = "USER_CLEARS_SEARCH_KEYWORD",
  // user actions in make a transfer form
  USER_UPDATES_BENEFICIARY_FIELD = "USER_UPDATES_BENEFICIARY_FIELD",
  USER_UPDATES_AMOUNT = "USER_UPDATES_AMOUNT",
  // user action in preview popup
  USER_CONFIRMS_TRANSACTION = "USER_CONFIRMS_TRANSACTION",
  // application actions
  ON_NEW_MERCHANT_CREATED = "ON_NEW_MERCHANT_CREATED",
  ON_FORM_ERROR = "ON_FORM_ERROR",
  ON_FORM_VALID = "ON_FORM_VALID",
  ON_MERCHANTS_UPDATE = "ON_MERCHANTS_UPDATE",
  ON_TRANSACTIONS_UPDATE = "ON_TRANSACTIONS_UPDATE",
  ON_BALANCE_UPDATE = "ON_BALANCE_UPDATE",
}

export const globalStateReducer = (
  state: StateType,
  action: DispatchType
): StateType => {
  switch (action.type) {
    // user actions in recent transactions card
    case ActionTypes.USER_UPDATES_SARCH_KEYOWORD:
      return {
        ...state,
        searchKeyword: action.searchKeyword || "",
      }
    case ActionTypes.USER_CHANGES_SORTING_DIRECTION:
      return {
        ...state,
        sortingDirection: state?.sortingDirection === "ASC" ? "DESC" : "ASC",
      }
    case ActionTypes.USER_CHANGES_SORTING_CRITERIA:
      return {
        ...state,
        sortingCriteria: action.sortingCriteria || "DATE",
      }
    case ActionTypes.USER_CLEARS_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: "",
      }
    // user actions in make a transfer form
    case ActionTypes.USER_UPDATES_BENEFICIARY_FIELD:
      return {
        ...state,
        transferAccount: action.transferAccount || "",
        missingAccount: false,
      }
    case ActionTypes.USER_UPDATES_AMOUNT:
      return {
        ...state,
        transferAmount: action.transferAmount || "",
        missingAmount: false,
      }
    // user action in preview popup
    case ActionTypes.USER_CONFIRMS_TRANSACTION:
      return {
        ...state,
        // update transactions & balance
        transactions: action.transactions || [],
        balance: toFixedNumber(action.balance || 0, 2) || 0,
        // reset form
        transferAccount: "",
        transferAmount: "",
        // hide preview popup
        showPreview: false,
        // reset sorting
        sortingCriteria: "DATE",
        sortingDirection: "DESC",
        // reset search term
        searchKeyword: "",
      }
    // application actions
    case ActionTypes.ON_NEW_MERCHANT_CREATED:
    case ActionTypes.ON_MERCHANTS_UPDATE:
      return {
        ...state,
        merchantsInventory: action.merchantsInventory || [],
      }
    case ActionTypes.ON_TRANSACTIONS_UPDATE:
      return {
        ...state,
        transactions: action.transactions || [],
      }
    case ActionTypes.ON_BALANCE_UPDATE:
      return {
        ...state,
        balance: toFixedNumber(action.balance || 0, 2) || 0,
      }
    case ActionTypes.ON_FORM_ERROR:
      return {
        ...state,
        missingAccount: action.missingAccount || false,
        missingAmount: action.missingAmount || false,
      }
    case ActionTypes.ON_FORM_VALID:
      return {
        ...state,
        showPreview: true,
      }
    default:
      return state
  }
}
