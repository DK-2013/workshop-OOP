import GeoIp from '../src';
/*
const mockData = {
  '': 'Moscow',
  '114.22.33.13': 'Chiyoda',
};
*/
test('get-geo self', async () => {
  const geoIp = new GeoIp({
    get: () => ({ data: { city: 'Moscow' } }),
  });
  const geoInfo = await geoIp.getLocation();
  expect(geoInfo.get('city')).toBe('Moscow');
});

test('get-geo 114.22.33.13', async () => {
  const geoIp = new GeoIp({
    get: () => ({ data: { city: 'Chiyoda' } }),
  });
  const geoInfo = await geoIp.getLocation('114.22.33.13');
  expect(geoInfo.get('city')).toBe('Chiyoda');
});
