const axios = require('axios');

const source = () => 'http://ip-api.com/json/';

const defaultResolver = (resp) => {
  console.log(resp.city);
  return resp;
};

const getService = client => (ip = '', resolve = defaultResolver) => {
  client.get(`${source()}${ip}`)
    .then(resolve)
    .catch((err) => { console.log(err); });
};

// const isAvailable = getService(axios, resp => resp instanceof Object);

const getLocation = getService(axios);

export default {
  getService,
  // isAvailable,
  getLocation,
};

/* export default (ip = '') => new Promise((resolve) => {
  http.get(`http://ip-api.com/json/${ip}`, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => { data = `${data}${chunk}`; });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).city);
      resolve(JSON.parse(data).city);
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });
}); */
