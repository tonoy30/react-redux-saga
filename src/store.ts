import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "./reducers/index"
import sagas from "./sagas/index"

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, logger]
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))
sagaMiddleware.run(sagas)

export { store }