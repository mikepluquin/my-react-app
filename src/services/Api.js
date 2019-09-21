import { create } from 'apisauce'

const config = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 20000
})

export const login = (attributes) => {
  return config
  .post(
    'auth/login',
    { 
      email: attributes.email, password: attributes.password
    }
  )
}

