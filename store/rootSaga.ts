import { all, fork } from 'redux-saga/effects'

import homeSagas from '@wiser/app/Auth/sagas'

export default function* rootSaga() {
  yield all([fork(homeSagas)])
}
