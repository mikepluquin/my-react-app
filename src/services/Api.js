import { create } from 'apisauce'

const config = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 20000
})

const setAuthorization = (token) => {
  config.setHeader('Authorization', token)
}

export const login = (attributes) => {
  return config
    .post(
      'auth/login',
      {
        email: attributes.email, password: attributes.password
      }
    )
}

export const register = (attributes) => {
  return config
    .post(
      'auth/register',
      {
        user: attributes
      }
    )
}

export const fetchPosts = (token) => {
  setAuthorization(token)
  return config
    .get('posts')
}
