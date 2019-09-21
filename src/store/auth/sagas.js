import { put } from 'redux-saga/effects'

import * as api from '../../services/api'
import * as actionCreators from './actionCreators'

export function* authLoginInitSaga(action) {
  yield action.started({})
  const response = yield api.login(action.attributes)
  if (response.ok) {
    yield put(actionCreators.authLoginSuccess(response.data.token, response.data.id, response.data.exp))
    yield action.done()
  }
  else{
    yield action.done({errors: [response.data.error]})
  }
  // yield localStorage.setItem('token', response.data.idToken)
  // yield localStorage.setItem('expirationDate', expirationDate)
  // yield localStorage.setItem('userId', response.data.localId)

  // yield put(actionCreators.authSuccess(response.data.idToken, response.data.localId))
}

export function* authRegisterInitSaga(action) {
  yield action.started({})
  const response = yield api.register(action.attributes)
  if (response.ok) {
    yield put(actionCreators.authRegisterSuccess(response.data.token, response.data.id, response.data.exp))
    yield action.done()
  }
  else{
    yield action.done({errors: response.data.errors})
  }
  // yield localStorage.setItem('token', response.data.idToken)
  // yield localStorage.setItem('expirationDate', expirationDate)
  // yield localStorage.setItem('userId', response.data.localId)

  // yield put(actionCreators.authSuccess(response.data.idToken, response.data.localId))
}

