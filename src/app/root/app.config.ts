export enum CardsDisplayConfig {
  transferCardHeight = 25.625, // em
  transferCardHeaderHeight = 2.5, // em
  transactionsCardHeaderHeight = 3, // em
  transferCardWidth = 28, // %
  transactionsCardWidth = 100 - CardsDisplayConfig.transferCardWidth, // %
}

export const InitialBalance = 5824.76 // initial account balance in euros
export const TransactionCap = 100000 // maximum amount allowed per transfer
export const MinimumBalance = -500 // minimmum balance required

export interface SavedMerchant {
  merchantName: string
  icon: string
  categoryCode: string
}

export const merchantsInventory: Array<SavedMerchant> = [
  {
    merchantName: "The Tea Lounge",
    icon: "assets/icons/the-tea-lounge.png",
    categoryCode: "#12a580",
  },
  {
    merchantName: "Backbase",
    icon: "assets/icons/backbase.png",
    categoryCode: "#12a580",
  },
  {
    merchantName: "Texaco",
    icon: "assets/icons/texaco.png",
    categoryCode: "#d51271",
  },
  {
    merchantName: "Amazon Online Store",
    icon: "assets/icons/amazon-online-store.png",
    categoryCode: "#c12020",
  },
  {
    merchantName: "7-Eleven",
    icon: "assets/icons/7-eleven.png",
    categoryCode: "#c89616",
  },
  {
    merchantName: "H&M Online Store",
    icon: "assets/icons/h&m-online-store.png",
    categoryCode: "#e25a2c",
  },
  {
    merchantName: "Jerry Hildreth",
    icon: "assets/icons/jerry-hildreth.png",
    categoryCode: "#1180aa",
  },
  {
    merchantName: "Lawrence Pearson",
    icon: "assets/icons/lawrence-pearson.png",
    categoryCode: "#12a580",
  },
  {
    merchantName: "Whole Foods",
    icon: "assets/icons/whole-foods.png",
    categoryCode: "#d51271",
  },
  {
    merchantName: "Southern Electric Company",
    icon: "assets/icons/southern-electric-company.png",
    categoryCode: "#fbbb1b",
  },
]

export const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
