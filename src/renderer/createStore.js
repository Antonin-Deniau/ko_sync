import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./services/reducer"
import rootSaga from "./services/saga"

export default () => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = applyMiddleware(sagaMiddleware)
  const devToolsExtention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const store = createStore(rootReducer, compose(middlewares, devToolsExtention))

  sagaMiddleware.run(rootSaga)

  return store
}
