import React from "react"
import ReactDOM from "react-dom"
import { App } from "./app/root"
import { GlobalStateProvider } from "./app/root/globalState/context"

const Root = () => {
  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))
