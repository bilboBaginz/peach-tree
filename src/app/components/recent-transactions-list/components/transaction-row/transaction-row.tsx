import React from "react"
import { Transaction } from "../../recent-transactions-list-types"
import { FlexedText } from "../../recent-transactions-list.styles"
import {
  getDeductedAmountDisplayed,
  mapMerchantToIcon,
  timeStampToDate,
} from "./transaction-row.helpers"
import {
  CategoryLabel,
  DateCell,
  CellsFlex,
  CellsWrapper,
  DateWrapper,
  Icon,
  RowWrapper,
  ThinSpan,
  IconCell,
  InfoCell,
} from "./transaction-row.styles"

export interface TransactionRowProps {
  last?: boolean
  transaction: Transaction
}

export const TransactionRow: React.FC<TransactionRowProps> = ({
  transaction,
  last = false,
}) => {
  return (
    <RowWrapper last={last}>
      <CategoryLabel categoryCode={transaction?.categoryCode} />
      <CellsWrapper>
        <CellsFlex>
          <DateCell>
            <DateWrapper>
              {timeStampToDate(transaction?.dates?.valueDate)}
            </DateWrapper>
          </DateCell>
          <IconCell>
            <Icon src={mapMerchantToIcon(transaction?.merchant?.name)} />
          </IconCell>
          <InfoCell>
            <FlexedText>
              <span>{transaction?.merchant?.name || ""}</span>
              <ThinSpan>{transaction?.transaction?.type || ""}</ThinSpan>
            </FlexedText>
          </InfoCell>
          <div style={{ display: "flex" }}>
            <span>&minus;</span>
            {getDeductedAmountDisplayed(
              +transaction?.transaction?.amountCurrency?.amount,
              transaction?.transaction?.amountCurrency?.currencyCode
            )}
          </div>
        </CellsFlex>
      </CellsWrapper>
    </RowWrapper>
  )
}
