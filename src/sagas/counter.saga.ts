import { put, takeEvery } from "redux-saga/effects";
import { decrementByOne, incrementByOne } from "../actions/counter.action";
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './../actions/types';

function* incrementSaga() {
    yield put(incrementByOne())
}
export function* incrementWatcherSaga() {
    yield takeEvery(COUNTER_INCREMENT, incrementSaga)

}


function* decrementSaga() {
    yield put(decrementByOne())
}
export function* decrementWatcherSaga() {
    yield takeEvery(COUNTER_DECREMENT, decrementSaga)
}