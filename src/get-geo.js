const axios = require('axios');

const source = () => 'http://ip-api.com/json/';

class HttpClient {
  constructor(ip = '', client = axios) {
    this.ip = ip;
    const { data } = client.get(`${source()}${ip}`);
    this.data = data || {};
  }

  getLocation() {
    return this.data.city;
  }
}

export default HttpClient;
