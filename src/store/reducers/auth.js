import * as actionTypes from '../actions/types/auth'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

const authLoginStart = (state, action) => {
  return{
    ...state, 
    loading: true
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN_START: return authLoginStart(state, action)
    default: return state
  }
}

export default reducer
