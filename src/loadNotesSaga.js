import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_NOTES, setNotes} from './actions'
import { getNotes } from './api'

export function* loadNotesWatcher() {
  //ViewからLOAD_NOTESがDispatchされると
  //loadNotesFlowの処理が走る
  yield takeLatest(LOAD_NOTES, loadNotesFlow)
}

function* loadNotesFlow() {
  console.log("++++")
  //callは非同期の処理が終わるのを待つ
  const notes = yield call(getNotes)
  console.log(' ----', notes)
  //putは単に処理を実行する
  yield put(setNotes(notes))
}
