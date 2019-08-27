import { put } from 'redux-saga/effects'

import * as api from '../../services/api'
import * as actionCreators from '../actions/creators/auth'

export function* authLoginInitSaga(action) {
  yield put(actionCreators.authLoginStart())

  const response = yield api.login(action.attributes)
  if (response.ok) {
    yield put(actionCreators.authLoginSuccess())
  }
  else{
    yield put(actionCreators.authLoginFail(response.data.error))
  }
  // yield localStorage.setItem('token', response.data.idToken)
  // yield localStorage.setItem('expirationDate', expirationDate)
  // yield localStorage.setItem('userId', response.data.localId)

  // yield put(actionCreators.authSuccess(response.data.idToken, response.data.localId))
}
