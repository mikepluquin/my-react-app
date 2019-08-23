import { put } from 'redux-saga/effects'
// import axios from 'axios'

import * as authActionCreators from '../actions/creators/auth'

export function *authInitSaga(action){
  yield put(authActionCreators.authStart())
  
  // const authData = {
  //   email: action.email,
  //   password: action.password
  // }

  // try{
    // const response = yield axios.post(defaultUrl,authData)

    // yield localStorage.setItem('token', response.data.idToken)
    // yield localStorage.setItem('expirationDate', expirationDate)
    // yield localStorage.setItem('userId', response.data.localId)

    // yield put(actionCreators.authSuccess(response.data.idToken, response.data.localId))
  // }
  // catch(err){
    // yield put(actionCreators.authFail(err.response.data.error))
  // }
}
