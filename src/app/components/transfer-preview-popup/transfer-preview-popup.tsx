import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonVariations } from "../../../packages/ui-components/button"
import { SavedMerchant } from "../../root/app.config"
import { GlobalStateContext } from "../../root/globalState/context"
import { ActionTypes } from "../../root/globalState/reducer"
import { Transaction } from "../recent-transactions-list/recent-transactions-list-types"
import {
  checkIfMerchangeExists,
  createNewMerchant,
  createTransaction,
} from "./transfer-preview-popup.helpers"
import { PreviewFlex } from "./transfer-preview-popup.styles"

interface TransferPreviewPopup {
  amount: string
  account: string
}

export const TransferPreviewPopup: React.FC<TransferPreviewPopup> = ({
  amount,
  account,
}) => {
  const { dispatch, state } = useContext(GlobalStateContext)
  const { t } = useTranslation("common")
  const onTransfer = () => {
    // create new transaction
    let newTransaction: Transaction
    let newMerchant: SavedMerchant

    const savedMerchant = checkIfMerchangeExists(
      state?.transferAccount,
      state?.merchantsInventory
    )

    if (savedMerchant) {
      newTransaction = createTransaction(savedMerchant, state?.transferAmount)
    } else {
      newMerchant = createNewMerchant(state?.transferAccount)
      dispatch({
        type: ActionTypes.ON_NEW_MERCHANT_CREATED,
        merchantsInventory: [...state?.merchantsInventory, newMerchant],
      })
      newTransaction = createTransaction(newMerchant, state?.transferAmount)
    }
    dispatch({
      type: ActionTypes.USER_CONFIRMS_TRANSACTION,
      transactions: [...state?.transactions, newTransaction],
      balance: state?.balance - newTransaction.transaction.amountCurrency.amount,
    })
  }

  return (
    <>
      <PreviewFlex>
        <span>{`${t("span.to_account")}: ${account}`}</span>
        <span>{`${t("span.amount")}: €${amount}`}</span>
        <Button
          style={{ marginTop: "1em" }}
          variation={ButtonVariations.primary}
          onClick={onTransfer}
        >
          {t("button.transfer")}
        </Button>
      </PreviewFlex>
    </>
  )
}
