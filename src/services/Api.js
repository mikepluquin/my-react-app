import { create } from 'apisauce'

const api = () => {
  const config = create({
    baseURL: "http://localhost:3001/",
    timeout: 20000
  })

  const login = (email, password) => {
    return config
    .post(
      'auth/login',
      { 
        email: email, password: password
      }
    )
  }

  return({
    login
  })
}

export default api()