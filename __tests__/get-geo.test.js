import api from '../src';

const { getService } = api;

test('get-geo self', async () => {
  const geoLocator = getService({
    get: () => ({ data: { city: 'Moscow' } }),
  });
  const getLocation = await geoLocator();
  expect(getLocation()).toBe('Moscow');
});

test('get-geo 114.22.33.13', async () => {
  const geoLocator = getService({
    get: () => ({ data: { city: 'Chiyoda' } }),
  });
  const getLocation = await geoLocator('114.22.33.13');
  expect(getLocation()).toBe('Chiyoda');
});
