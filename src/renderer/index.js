import  React from 'react'
import { Provider } from "react-redux"
import { render } from "react-dom"
import { BrowserRouter as Router } from 'react-router-dom'

import App from "./pages/App"

import createStore from "./createStore"
import routes from './routes'

const rootElement = document.getElementById("app")

let store = createStore()

render(
  <Provider store={store}>
   <App>
     <Router>
      {routes}
     </Router>
   </App>
  </Provider>,
  rootElement
)
