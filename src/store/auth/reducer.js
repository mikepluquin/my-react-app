import * as actionTypes from './actionTypes'

const initialState = {
  token: null,
  userId: null,
  expirationDate: null
}

const authLoginSuccess = (state, action) => {
  return {
    ...state, 
    token: action.token,
    userId: action.userId,
    expirationDate: action.expirationDate
  }
}

const authRegisterSuccess = (state, action) => {
  return {
    ...state, 
    token: action.token,
    userId: action.userId,
    expirationDate: action.expirationDate
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_SUCCESS: return authLoginSuccess(state, action)
    case actionTypes.AUTH_REGISTER_SUCCESS: return authRegisterSuccess(state, action)
    default: return state
  }
}

export default reducer
