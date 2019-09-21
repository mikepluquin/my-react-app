import { all, takeLatest } from 'redux-saga/effects'

import * as authActionTypes from './auth/actionTypes'
import { authLoginInitSaga, authRegisterInitSaga } from './auth/sagas'

export function *watchAuth(){
  yield all([
    takeLatest(authActionTypes.AUTH_LOGIN_INIT, authLoginInitSaga),
    takeLatest(authActionTypes.AUTH_REGISTER_INIT, authRegisterInitSaga)
  ])
}