import { put } from 'redux-saga/effects'

import Api from '../../services/Api'
import * as actionCreators from '../actions/creators/auth'

export function* authLoginInitSaga(action) {
  yield put(actionCreators.authLoginStart())

  const response = yield Api.login(action.email, action.password)
  if (response.ok) {
    console.log("ok")
    console.log(response.data)
  }
  else{
    console.log("not ok")
    console.log(response.data)
  }
  // yield localStorage.setItem('token', response.data.idToken)
  // yield localStorage.setItem('expirationDate', expirationDate)
  // yield localStorage.setItem('userId', response.data.localId)

  // yield put(actionCreators.authSuccess(response.data.idToken, response.data.localId))
}
