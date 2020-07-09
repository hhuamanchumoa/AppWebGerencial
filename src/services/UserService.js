/* eslint-disable no-undef */
import {authHeader} from '../helpers/auth-header'

class UserService {
  axios
  baseUrl

  constructor (axios, apiUrl) {
    this.axios = axios
    this.baseUrl = `${apiUrl}users`
  }

  login (model) {
    let self = this
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password })
    // }

    return self.axios.post(`${self.baseUrl}/authenticate`, model)
    .then(user => {
      if (user.data.token) {
        localStorage.setItem('user', JSON.stringify(user.data))
      }
      return user.data
    })
    // return fetch(`${self.baseUrl}/authenticate`, requestOptions)
    //     .then(user => {
    //       console.log(user)
    //         login successful if there's a jwt token in the response
    //       if (user.token) {
    //             store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user))
    //       }

    //       return user
    //     })
  }

  logout () {

  }
  get (id) {
    let self = this
    return self.axios.get(`${self.baseUrl}/${id}`)
  }

  getAll () {
    let self = this
    return self.axios.get(`${self.baseUrl}`)
  }

  add (model) {
    let self = this
    return self.axios.post(`${self.baseUrl}`, model)
  }

  update (model) {
    let self = this
    return self.axios.put(`${self.baseUrl}`, model)
  }

  remove (id) {
    let self = this
    return self.axios.delete(`${self.baseUrl}/${id}`)
  }
  handleResponse (response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text)
      if (!response.ok) {
        if (response.status === 401) {
                // auto logout if 401 response returned from api
          logout()
          location.reload(true)
        }

        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
      }

      return data
    })
  }
}

export default UserService
