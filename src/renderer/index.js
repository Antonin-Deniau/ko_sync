import  React from 'react'
import { render } from "react-dom"

import { Provider } from "react-redux"
import createStore from "./createStore"

import App from "./pages/App"
import Main from "./pages/Main"

const rootElement = document.getElementById("app")

let store = createStore()

render(
  <Provider store={store}>
    <App><Main/></App>
  </Provider>,
  rootElement
)
