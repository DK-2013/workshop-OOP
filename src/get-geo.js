const axios = require('axios');

const source = () => 'http://ip-api.com/json/';

const getService = (client = axios) => async (ip = '') => {
  try {
    const cc = await client.get(`${source()}${ip}`);
    const { data } = cc;
    return () => data.city;
  } catch (e) {
    throw e;
  }
};

const GeoLocator = getService(axios);

export default { GeoLocator, getService };
