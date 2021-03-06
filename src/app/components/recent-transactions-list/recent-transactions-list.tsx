import React, { useCallback, useContext, useMemo } from "react"
import { useTranslation } from "react-i18next"
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
  ListWrapper,
} from "./recent-transactions-list.styles"
import { Transaction } from "./recent-transactions-list-types"
import { TransactionRow } from "./components/transaction-row"
import { Criteria, GlobalStateContext } from "../../root/globalState/context"
import { ActionTypes } from "../../root/globalState/reducer"
import { compareFunctionMapper } from "./recent-transactions-list.helpers"

export const RecentTransactionsList: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext)
  const { t } = useTranslation("common")
  const handleKeywordSearchChange = useCallback(
    (e: { target: { value: string } }) => {
      const searchKeyword = e.target.value
      dispatch({
        type: ActionTypes.USER_UPDATES_SARCH_KEYOWORD,
        searchKeyword,
      })
    },
    [dispatch]
  )

  const handleSorting = useCallback(
    (sortingCriteria: Criteria) => {
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
    },
    [state?.sortingCriteria]
  )

  const getDirection = useCallback(
    (criteria: Criteria) => {
      if (state?.sortingCriteria !== criteria) {
        return null
      }
      return state?.sortingDirection === "ASC"
        ? ArrowDirection.up
        : ArrowDirection.down
    },
    [state?.sortingCriteria, state?.sortingDirection]
  )

  const clearSearchKeyWord = useCallback(() => {
    dispatch({
      type: ActionTypes.USER_CLEARS_SEARCH_KEYWORD,
    })
  }, [dispatch])

  const TransactionsMemorised = useMemo(() => {
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

  const ListHeaderMemorised = useMemo(
    () => (
      <ListHeader>
        <SearchInputWrapper>
          <Input
            style={customInputBorder}
            placeholder={t("placeholder.keyword_search")}
            onChange={handleKeywordSearchChange}
            value={state?.searchKeyword}
            searchButton={true}
            handleOnClickClear={clearSearchKeyWord}
          />
        </SearchInputWrapper>
        <Span>{t("span.sort_by")}</Span>
        <SortingButtonsWrapper>
          <SortingButton
            name={t("button.date")}
            criteria={"DATE"}
            direction={getDirection("DATE")}
            onSortingClick={handleSorting}
          />
          <SortingButton
            name={t("button.beneficiary")}
            criteria={"BENEFICIARY"}
            direction={getDirection("BENEFICIARY")}
            style={noLeftBorder}
            onSortingClick={handleSorting}
          />
          <SortingButton
            name={t("button.amount")}
            criteria={"AMOUNT"}
            direction={getDirection("AMOUNT")}
            style={noLeftBorder}
            onSortingClick={handleSorting}
          />
        </SortingButtonsWrapper>
      </ListHeader>
    ),
    [state?.searchKeyword, handleSorting, getDirection]
  )

  return (
    <ListWrapper>
      {ListHeaderMemorised}
      <ul style={{ listStyleType: "none", padding: "0 1em 0 1em" }}>
        {TransactionsMemorised}
      </ul>
    </ListWrapper>
  )
}
