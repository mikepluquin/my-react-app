import * as actionTypes from './actionTypes'

export const authLoginInit = (payload) => {
  return{
    type: actionTypes.AUTH_LOGIN_INIT,
    attributes: payload.attributes,
    resolve: payload.resolve,
    reject: payload.reject
  }
}

export const authLoginSuccess = (token, userId, expirationDate) => {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    token: token,
    userId: userId,
    expirationDate: expirationDate
  }
}

export const authAutoLoginInit = (payload) => {
  return{
    type: actionTypes.AUTH_AUTO_LOGIN_INIT
  }
}

export const authAutoLoginSuccess = (token, userId, expirationDate) => {
  return {
    type: actionTypes.AUTH_AUTO_LOGIN_SUCCESS,
    token: token,
    userId: userId,
    expirationDate: expirationDate
  }
}

export const authRegisterInit = (payload) => {
  return{
    type: actionTypes.AUTH_REGISTER_INIT,
    attributes: payload.attributes,
    resolve: payload.resolve,
    reject: payload.reject
  }
}

export const authRegisterSuccess = (token, userId, expirationDate) => {
  return {
    type: actionTypes.AUTH_REGISTER_SUCCESS,
    token: token,
    userId: userId,
    expirationDate: expirationDate
  }
}
