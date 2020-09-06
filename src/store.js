import { createStore, applyMiddleware } from 'redux'
import {notesReducer} from './notesReducer'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

//通常のreducerと、sagaのファイルをつなげてstore定義
export const store = createStore(notesReducer, applyMiddleware(sagaMiddleware))

//rootSagaの

// export function* rootSaga() {
//   yield fork(loadNotesWatcher)
//   yield fork(saveNotesWatcher)
// }

//↑これがセットされる
sagaMiddleware.run(rootSaga)
