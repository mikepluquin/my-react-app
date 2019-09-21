import * as actionTypes from './actionTypes'

export const authLoginInit = (payload) => {
  return{
    type: actionTypes.AUTH_LOGIN_INIT,
    attributes: payload.attributes,
    started: payload.started,
    done: payload.done
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

export const authRegisterInit = (payload) => {
  return{
    type: actionTypes.AUTH_LOGIN_INIT,
    attributes: payload.attributes,
    started: payload.started,
    done: payload.done
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
