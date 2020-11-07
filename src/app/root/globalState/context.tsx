import React, { createContext, Dispatch, useReducer } from "react"
import { Transaction } from "../../components/recent-transactions-list/recent-transactions-list-types"
import { SavedMerchant } from "../app.config"
import { initialState } from "./initialState"
import { ActionTypes, globalStateReducer } from "./reducer"

export type Criteria = "DATE" | "BENEFICIARY" | "AMOUNT"
export type Direction = "ASC" | "DESC"

export interface StateType {
  merchantsInventory: Array<SavedMerchant>
  transactions: Array<Transaction>
  balance: number
  searchKeyword: string
  sortingCriteria: Criteria
  sortingDirection: Direction
  transferAmount: string
  transferAccount: string
  missingAmount: boolean
  missingAccount: boolean
  showPreview: boolean
}

export type DispatchType = {
  type: ActionTypes
  merchantsInventory?: Array<SavedMerchant>
  balance?: number
  transactions?: Array<Transaction>
  searchKeyword?: string
  sortingCriteria?: Criteria
  sortingDirection?: Direction
  transferAmount?: string
  transferAccount?: string
  missingAmount?: boolean
  missingAccount?: boolean
}

export const GlobalStateContext = createContext<{
  state: StateType
  dispatch: Dispatch<DispatchType>
}>({
  state: initialState,
  dispatch: () => null,
})

type GlobalAppProps = {
  children: React.ReactNode
}

export const GlobalStateProvider: React.FC<GlobalAppProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState)

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
