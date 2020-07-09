/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
import Axios from 'axios'
import exampleService from '../services/ExampleService'
import salesService from '../services/SalesService'
import accountsReceivableService from '../services/AccountsReceivableService'
import accountsPayService from '../services/AccountsPayService'
import userService from '../services/UserService'

let apiUrl = 'http://104.248.8.139/'
// let apiUrl_Prod = 'http://104.248.8.139/'
// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
  exampleService: new exampleService(Axios),
  salesService: new salesService(Axios, apiUrl),
  accountsReceivableService: new accountsReceivableService(Axios, apiUrl),
  accountsPayService: new accountsPayService(Axios, apiUrl),
  userService: new userService(Axios, apiUrl)
}
