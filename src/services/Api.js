import { create } from 'apisauce'

const config = create({
  baseURL: "http://localhost:3001/",
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

