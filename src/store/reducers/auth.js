import * as authActionTypes from '../actions/types/auth'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

const authStart = (state, action) => {
  return{
    ...state, 
    loading: true
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.AUTH_START: return authStart(state, action)
    default: return state
  }
}

export default reducer
