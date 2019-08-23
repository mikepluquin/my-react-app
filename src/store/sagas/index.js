import { takeLatest, all } from 'redux-saga/effects'

import {
  authInitSaga,
 } from './auth'
import * as authActionTypes from '../actions/types/auth'

export function *watchAuth(){
  yield all([
    takeLatest(authActionTypes.AUTH_INIT, authInitSaga),
  ])
}
