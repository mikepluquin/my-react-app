import { put } from 'redux-saga/effects'

import * as api from '../../services/api'
import * as actionCreators from './actionCreators'

export function* authLoginInitSaga(action) {
  const response = yield api.login(action.attributes)
  if (response.ok) {
    yield put(actionCreators.authLoginSuccess(response.data.token, response.data.id, response.data.exp))
    
    yield localStorage.setItem('token', response.data.token)
    yield localStorage.setItem('expirationDate', response.data.exp)
    yield localStorage.setItem('userId', response.data.id)

    yield action.resolve()
  }
  else{
    yield action.reject({errors: [response.data.error]})
  }
}

export function* authAutoLoginInitSaga(action) {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  const expirationDate = localStorage.getItem('expirationDate')

  if (token && userId && expirationDate) {
    yield put(actionCreators.authAutoLoginSuccess(token, userId, expirationDate))
  }
}

export function* authRegisterInitSaga(action) {
  const response = yield api.register(action.attributes)
  if (response.ok) {
    yield put(actionCreators.authRegisterSuccess(response.data.token, response.data.id, response.data.exp))
   
    yield localStorage.setItem('token', response.data.token)
    yield localStorage.setItem('expirationDate', response.data.exp)
    yield localStorage.setItem('userId', response.data.id)
   
    yield action.resolve()
  }
  else{
    yield action.reject({errors: response.data.errors})
  }
}

