import { merchantsInventory, Months } from "../../../../root/app.config"

export const timeStampToDate = (timestamp: number): string => {
  const date = new Date(timestamp)
  return timestamp ? `${Months[date.getUTCMonth()]}. ${date.getUTCDate()}` : "N/A"
}

export const mapMerchantToIcon = (merchantName: string): string => {
  return (
    merchantsInventory.find((icon) => icon.merchantName === merchantName)?.icon || ""
  )
}

export const toFixedNumber = (num: number, digits: number): number => {
  const pow = Math.pow(10, digits)
  return Math.round(num * pow) / pow
}

export const getDeductedAmountDisplayed = (
  amount: number,
  currencyCode: string
): string => {
  return `${currencyCode === "EUR" ? "€" : ""}${toFixedNumber(amount, 2)}`
}
