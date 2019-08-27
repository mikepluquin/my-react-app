import * as actionTypes from '../actions/types/auth'

const initialState = {
  token: null,
  userId: null,
  loginForm: {
    errors: []
  },
  loading: false
}

const authLoginStart = (state, action) => {
  return{
    ...state, 
    loading: true
  }
}

const authLoginSuccess = (state, action) => {
  return{
    ...state, 
    loading: false
  }
}

const authLoginFail = (state, action) => {
  const form = state.form
  const updatedForm = {
    ...form,
    errors: [action.error]
  }

  return{
    ...state, 
    loading: false,
    loginForm: updatedForm
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_START: return authLoginStart(state, action)
    case actionTypes.AUTH_LOGIN_SUCCESS: return authLoginSuccess(state, action)
    case actionTypes.AUTH_LOGIN_FAIL: return authLoginFail(state, action)
    default: return state
  }
}

export default reducer
