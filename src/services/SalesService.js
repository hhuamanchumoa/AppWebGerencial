/* eslint-disable camelcase */
class SalesService {
  axios
  baseUrl_Seller
  baseUrl_Store

  constructor (axios, apiUrl) {
    this.axios = axios
    this.baseUrl_Seller = `${apiUrl}salesSeller`
    this.baseUrl_Store = `${apiUrl}salesStore`
  }

    // get(id) {
    //     let self = this;
    //     return self.axios.get(`${self.baseUrl}/${id}`);
    // }

  getAllStore (startDate, endDate) {
    let self = this
    return self.axios.get(`${self.baseUrl_Store}?startDate=${startDate}&endDate=${endDate}`)
  }

  getAllSeller (startDate, endDate) {
    let self = this
    return self.axios.get(`${self.baseUrl_Seller}?startDate=${startDate}&endDate=${endDate}`)
  }

    // add(model) {
    //     let self = this;
    //     return self.axios.post(`${self.baseUrl}`, model);
    // }

    // update(model) {
    //     let self = this;
    //     return self.axios.put(`${self.baseUrl}`, model);
    // }

    // remove(id) {
    //     let self = this;
    //     return self.axios.delete(`${self.baseUrl}/${id}`);
    // }
}

export default SalesService
