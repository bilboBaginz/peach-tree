import React, { useCallback, useContext, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { Button, ButtonVariations } from "../../../packages/ui-components/button"
import { Input } from "../../../packages/ui-components/input"
import { GlobalStateContext } from "../../root/globalState/context"
import { ActionTypes } from "../../root/globalState/reducer"
import { ButtonContainer } from "./make-transfer-form.styles"
import {
  amountIsNotValid,
  amountIsTooLarge,
  fieldsAreMissing,
  isOverDraftLimitReached,
} from "./make-transfer-form.helpers"

export const MakeTransferForm: React.FC = () => {
  const { state, dispatch } = useContext(GlobalStateContext)
  const { t } = useTranslation("common")

  const handleBeneficiaryUpdate = useCallback(
    (e: { target: { value: string } }) => {
      const transferAccount = e.target.value
      dispatch({
        type: ActionTypes.USER_UPDATES_BENEFICIARY_FIELD,
        transferAccount,
      })
    },
    [dispatch]
  )

  const handleAmountUpdate = useCallback(
    (e: { target: { value: string } }) => {
      const transferAmount = e.target.value
      dispatch({
        type: ActionTypes.USER_UPDATES_AMOUNT,
        transferAmount: transferAmount,
      })
    },
    [dispatch]
  )

  const handleSubmitClick = useCallback(() => {
    // validate form
    if (
      amountIsNotValid(state?.transferAmount) ||
      isOverDraftLimitReached(state?.balance, state?.transferAmount) ||
      amountIsTooLarge(state?.transferAmount)
    ) {
      return
    }
    if (fieldsAreMissing(state?.transferAmount, state?.transferAccount)) {
      dispatch({
        type: ActionTypes.ON_FORM_ERROR,
        missingAmount: state?.transferAmount === "",
        missingAccount: state?.transferAccount === "",
      })
      return
    }

    dispatch({
      type: ActionTypes.ON_FORM_VALID,
    })
  }, [state?.transferAmount, state?.balance, state?.transferAccount, dispatch])

  const FormMemorised = useMemo(
    () => (
      <form>
        <Input
          label={t("input.from_account")}
          placeholder={`${t("placeholder.free_checking")}(4692) - €${
            state?.balance
          }`}
          disabled={true}
          customError={
            isOverDraftLimitReached(state?.balance, state?.transferAmount)
              ? " Insufficient funds*"
              : ""
          }
        />
        <Input
          label={t("input.to_account")}
          placeholder={t("placeholder.beneficiary_account")}
          onChange={handleBeneficiaryUpdate}
          empty={state?.missingAccount}
          value={state?.transferAccount}
        />
        <Input
          label={t("input.amount")}
          placeholder={"€0.00"}
          isNumber={true}
          onChange={handleAmountUpdate}
          empty={state?.missingAmount}
          invalidNumber={amountIsNotValid(state?.transferAmount)}
          value={state?.transferAmount}
          customError={amountIsTooLarge(state?.transferAmount) ? " Too large" : ""}
        />
      </form>
    ),
    [
      state?.balance,
      state?.transferAmount,
      state?.transferAccount,
      state?.missingAmount,
      state?.missingAccount,
    ]
  )

  const ButtonMemorised = useMemo(
    () => (
      <ButtonContainer>
        <Button variation={ButtonVariations.primary} onClick={handleSubmitClick}>
          {t("button.submit")}
        </Button>
      </ButtonContainer>
    ),
    [handleSubmitClick]
  )

  return (
    <>
      {FormMemorised}
      {ButtonMemorised}
    </>
  )
}
