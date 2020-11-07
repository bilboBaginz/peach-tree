import React, { useContext, useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { ArrowDirection } from "../../../packages/ui-components/arrows/arrows"
import { Input } from "../../../packages/ui-components/input"
import { SortingButton } from "./components/sorting-button"
import {
  customInputBorder,
  ListHeader,
  SearchInputWrapper,
  Span,
  SortingButtonsWrapper,
  noLeftBorder,
} from "./recent-transactions-list.styles"
import { Transaction } from "./recent-transactions-list-types"
import { TransactionRow } from "./components/transaction-row"
import { Criteria, GlobalStateContext } from "../../root/globalState/context"
import { ActionTypes } from "../../root/globalState/reducer"
import { compareFunctionMapper } from "./recent-transactions-list.helpers"

export const RecentTransactionsList: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeywordSearchChange = (e: { target: { value: any } }) => {
    const searchKeyword = e.target.value
    dispatch({
      type: ActionTypes.USER_UPDATES_SARCH_KEYOWORD,
      searchKeyword,
    })
  }

  const handleSorting = (sortingCriteria: Criteria) => {
    if (sortingCriteria === state?.sortingCriteria) {
      dispatch({
        type: ActionTypes.USER_CHANGES_SORTING_DIRECTION,
      })
    } else {
      dispatch({
        type: ActionTypes.USER_CHANGES_SORTING_CRITERIA,
        sortingCriteria,
      })
    }
  }

  const getDirection = (criteria: Criteria) => {
    if (state?.sortingCriteria !== criteria) {
      return null
    }
    return state?.sortingDirection === "ASC"
      ? ArrowDirection.up
      : ArrowDirection.down
  }

  const clearSearchKeyWord = () => {
    dispatch({
      type: ActionTypes.USER_CLEARS_SEARCH_KEYWORD,
    })
  }

  const Transactions = useMemo(() => {
    const searchKeyword = state?.searchKeyword.toLowerCase()

    // filter list
    const listFiltered =
      searchKeyword !== ""
        ? state?.transactions.filter(
            (transaction) =>
              transaction?.merchant?.name?.toLowerCase()?.includes(searchKeyword) ||
              transaction?.transaction.type.toLowerCase().includes(searchKeyword)
          )
        : state?.transactions

    // sort list
    const listSorted = listFiltered.sort(
      compareFunctionMapper.find(
        (compareFunction) =>
          compareFunction.criteria === state?.sortingCriteria &&
          compareFunction.direction === state?.sortingDirection
      )?.sortingFunc
    )
    // render list
    return (
      listSorted &&
      listSorted?.length > 0 &&
      listSorted.map((transaction: Transaction, index: number) => {
        return (
          <TransactionRow
            key={uuidv4()}
            transaction={transaction}
            last={listFiltered?.length - 1 === index}
          />
        )
      })
    )
  }, [
    state?.transactions,
    state?.searchKeyword,
    state?.sortingDirection,
    state?.sortingCriteria,
  ])

  return (
    <>
      <ListHeader>
        <SearchInputWrapper>
          <Input
            style={customInputBorder}
            placeholder={"Search by typing..."}
            onChange={handleKeywordSearchChange}
            value={state?.searchKeyword}
            searchButton={true}
            handleOnClickClear={clearSearchKeyWord}
          />
        </SearchInputWrapper>
        <Span>{"Sort by"}</Span>
        <SortingButtonsWrapper>
          <SortingButton
            criteria={"DATE"}
            direction={getDirection("DATE")}
            onSortingClick={handleSorting}
          />
          <SortingButton
            criteria={"BENEFICIARY"}
            direction={getDirection("BENEFICIARY")}
            style={noLeftBorder}
            onSortingClick={handleSorting}
          />
          <SortingButton
            criteria={"AMOUNT"}
            direction={getDirection("AMOUNT")}
            style={noLeftBorder}
            onSortingClick={handleSorting}
          />
        </SortingButtonsWrapper>
      </ListHeader>
      <ul style={{ listStyleType: "none", padding: 0 }}>{Transactions}</ul>
    </>
  )
}