import * as actionTypes from '../types/auth'

export const authLoginInit = (email, password) => {
  return{
    type: actionTypes.AUTH_LOGIN_INIT,
    email: email,
    password: password,
  }
}

export const authLoginStart = () => {
  return {
    type: actionTypes.AUTH_LOGIN_START
  }
}

export const authLoginSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    token: token,
    userId: userId
  }
}

export const authLoginFail = (error) => {
  return {
    type: actionTypes.AUTH_LOGIN_FAIL,
    error: error
  }
}