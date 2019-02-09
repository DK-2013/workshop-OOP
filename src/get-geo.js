const axios = require('axios');

const source = () => 'http://ip-api.com/json/';

class GeoIp {
  constructor(client = axios) {
    this.client = client;
  }

  async getLocation(ip = '') {
    const { data } = await this.client.get(`${source()}${ip}`) || {};
    return { get: prop => data[prop] };
  }
}

export default GeoIp;
