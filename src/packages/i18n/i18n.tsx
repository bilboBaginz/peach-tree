import React from "react"
import common_en from "./translations/en/common.json"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"
import { ReactNode } from "react"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
  },
})

interface I18NProps {
  children: ReactNode
}

export const I18N: React.FC<I18NProps> = ({ children }) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}
