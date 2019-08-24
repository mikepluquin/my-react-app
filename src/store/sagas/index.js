import { takeLatest, all } from 'redux-saga/effects'

import {
  authInitSaga,
 } from './auth'
import * as actionTypes from '../actions/types/auth'

export function *watchAuth(){
  yield all([
    takeLatest(actionTypes.AUTH_INIT, authInitSaga),
  ])
}
