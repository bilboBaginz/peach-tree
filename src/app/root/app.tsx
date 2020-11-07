import React, { useContext, useEffect } from "react"
import {
  GlobalStyle,
  Logo,
  Bakcground,
  PageDivider,
  PageHeader,
  CardsContainer,
  resetButtonStyle,
  ResetButtonWrapper,
} from "./app.styles"
import { Card } from "../../packages/ui-components/card"
import { MakeTransferForm } from "../components/make-transfer-form"
import { RecentTransactionsList } from "../components/recent-transactions-list"
import json from "./mock/transactions.json"
import { CardsDisplayConfig, InitialBalance, merchantsInventory } from "./app.config"
import { useLocalStorage } from "../../packages/hooks"
import { ActionTypes } from "./globalState/reducer"
import { GlobalStateContext } from "./globalState/context"
import { Button, ButtonVariations } from "../../packages/ui-components/button"
import { Modal } from "../../packages/ui-components/modal"
import { TransferPreviewPopup } from "../components/transfer-preview-popup"

export const App: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext)

  const [storedMerchants, updateMerchants] = useLocalStorage("savedMerchants", [])

  const [storedTransactions, updateTransactions] = useLocalStorage(
    "transactions",
    []
  )
  const [storedBalance, updateBalance] = useLocalStorage("balance", 0)

  const clearLocalStorage = () => {
    updateTransactions([])
    updateBalance(InitialBalance)
  }

  useEffect(() => {
    if (storedMerchants?.length === 0) {
      updateMerchants(merchantsInventory)
    } else {
      dispatch({
        type: ActionTypes.ON_MERCHANTS_UPDATE,
        merchantsInventory: storedMerchants,
      })
    }
  }, [storedMerchants])

  useEffect(() => {
    if (storedTransactions?.length === 0) {
      updateTransactions(json?.data)
    } else {
      dispatch({
        type: ActionTypes.ON_TRANSACTIONS_UPDATE,
        transactions: storedTransactions,
      })
    }
  }, [storedTransactions])

  useEffect(() => {
    if (storedBalance === 0) {
      updateBalance(InitialBalance)
    } else {
      dispatch({
        type: ActionTypes.ON_BALANCE_UPDATE,
        balance: storedBalance,
      })
    }
  }, [storedBalance])

  useEffect(() => {
    updateMerchants(state?.merchantsInventory)
  }, [state?.merchantsInventory])

  useEffect(() => {
    updateTransactions(state?.transactions)
  }, [state?.transactions])

  useEffect(() => {
    updateBalance(state?.balance)
  }, [state?.balance])

  const onUserHidesPreview = () => {
    dispatch({
      type: ActionTypes.USER_HIDES_PREVIEW,
    })
  }

  return (
    <>
      <GlobalStyle />
      <PageHeader>
        <Logo src={"assets/logo.jpg"} />
        <ResetButtonWrapper>
          <Button
            variation={ButtonVariations.primary}
            onClick={clearLocalStorage}
            style={resetButtonStyle}
          >
            {"RESET"}
          </Button>
        </ResetButtonWrapper>
      </PageHeader>
      <PageDivider />
      <Bakcground>
        <CardsContainer>
          <Card
            cardHeight={CardsDisplayConfig.transferCardHeight}
            cardHeaderHeight={CardsDisplayConfig.transferCardHeaderHeight}
            cardWidth={CardsDisplayConfig.transferCardWidth}
            cardMargin={"4em 1em 4em 6.5em"}
            cardTitle={"Make a Transfer"}
            iconSrc={"" /*"assets/icons/arrows.png"*/}
          >
            <MakeTransferForm />
          </Card>
          <Card
            cardHeaderHeight={CardsDisplayConfig.transactionsCardHeaderHeight}
            cardWidth={CardsDisplayConfig.transactionsCardWidth}
            cardMargin={"4em 6.5em 4em 1em"}
            cardTitle={"Recent Transactions"}
            iconSrc={"" /*"assets/icons/briefcase.png"*/}
            cardBodyPadding={"1em"}
          >
            <RecentTransactionsList />
          </Card>
        </CardsContainer>
      </Bakcground>
      <Modal display={state?.showPreview} toggle={onUserHidesPreview}>
        <TransferPreviewPopup
          amount={state?.transferAmount}
          account={state?.transferAccount}
        />
      </Modal>
    </>
  )
}
