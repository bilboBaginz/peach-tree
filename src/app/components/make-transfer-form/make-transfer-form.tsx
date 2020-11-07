import React, { useContext } from "react"
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

  const handleBeneficiaryUpdate = (e: { target: { value: string } }) => {
    const transferAccount = e.target.value
    dispatch({
      type: ActionTypes.USER_UPDATES_BENEFICIARY_FIELD,
      transferAccount,
    })
  }

  const handleAmountUpdate = (e: { target: { value: string } }) => {
    const transferAmount = e.target.value
    dispatch({
      type: ActionTypes.USER_UPDATES_AMOUNT,
      transferAmount: transferAmount,
    })
  }

  const handleSubmitClick = () => {
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
  }

  return (
    <>
      <form>
        <Input
          label={"FROM ACCOUNT"}
          placeholder={`Free checking(4692) - €${state?.balance}`}
          disabled={true}
          customError={
            isOverDraftLimitReached(state?.balance, state?.transferAmount)
              ? " Insufficient funds*"
              : ""
          }
        />
        <Input
          label={"TO ACCOUNT"}
          placeholder={"Beneficiary account"}
          onChange={handleBeneficiaryUpdate}
          empty={state?.missingAccount}
          value={state?.transferAccount}
        />
        <Input
          label={"AMOUNT"}
          placeholder={"€0.00"}
          isNumber={true}
          onChange={handleAmountUpdate}
          empty={state?.missingAmount}
          invalidNumber={amountIsNotValid(state?.transferAmount)}
          value={state?.transferAmount}
          customError={amountIsTooLarge(state?.transferAmount) ? " Too large" : ""}
        />
      </form>
      <ButtonContainer>
        <Button variation={ButtonVariations.primary} onClick={handleSubmitClick}>
          {"SUBMIT"}
        </Button>
      </ButtonContainer>
    </>
  )
}
