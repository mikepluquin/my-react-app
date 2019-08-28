import { fromJS } from 'immutable'

import * as actionTypes from './actionTypes'

const initialState = {
  token: null,
  userId: null,
  expirationDate: null
}

const authLoginSuccess = (state, action) => {
  return fromJS(state)
  .set('token', action.token)
  .set('userId', action.userId)
  .set('expirationDate', action.expirationDate)
  .toJS()
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_SUCCESS: return authLoginSuccess(state, action)
    default: return state
  }
}

export default reducer
