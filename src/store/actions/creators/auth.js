import * as actionTypes from '../types/auth'

export const authInit = (email, password) => {
  return{
    type: actionTypes.AUTH_INIT,
    email: email,
    password: password,
  }
}

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}