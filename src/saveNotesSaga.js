import {takeLatest, call} from 'redux-saga/effects'
import {SAVE_NOTES} from './actions'
import { postNotes } from './api'

export function* saveNotesWatcher() {
  //ViewからLOAD_NOTESがDispatchされると
  //loadNotesFlowの処理が走る
  yield takeLatest(SAVE_NOTES, saveNotesFlow)
}

function* saveNotesFlow(action) {
  //callは非同期の処理が終わるのを待つ
  yield call(postNotes, action.payload)
}
