import * as actionTypes from '../types/auth'

export const authLoginInit = (attributes) => {
  return{
    type: actionTypes.AUTH_LOGIN_INIT,
    attributes: attributes
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