import HttpClient from '../src';
/*
const mockData = {
  '': 'Moscow',
  '114.22.33.13': 'Chiyoda',
};
*/

test('get-geo self', async () => {
  const geoLocator = await new HttpClient('', {
    get: () => ({ data: { city: 'Moscow' } }),
  });
  expect(geoLocator.getLocation()).toBe('Moscow');
});

test('get-geo 114.22.33.13', async () => {
  const geoLocator = await new HttpClient('114.22.33.13', {
    get: () => ({ data: { city: 'Chiyoda' } }),
  });
  expect(geoLocator.getLocation()).toBe('Chiyoda');
});
