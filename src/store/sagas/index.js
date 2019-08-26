import { takeLatest, all } from 'redux-saga/effects'

import {
  authLoginInitSaga,
 } from './auth'
import * as actionTypes from '../actions/types/auth'

export function *watchAuth(){
  yield all([
    takeLatest(actionTypes.AUTH_LOGIN_INIT, authLoginInitSaga),
  ])
}
