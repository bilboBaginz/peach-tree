import React from "react"
import ReactDOM from "react-dom"
import { App } from "./app/root"
import { GlobalStateProvider } from "./app/root/globalState/context"
import { I18N } from "./packages/i18n"

const Root = () => {
  return (
    <I18N>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </I18N>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))
