import { all } from "redux-saga/effects"
import { incrementWatcherSaga, decrementWatcherSaga } from "./counter.saga"
export default function* rootSaga() {
    yield all([incrementWatcherSaga(), decrementWatcherSaga()])
}
