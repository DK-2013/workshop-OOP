import geoLocator from '../src';

const { /* getService, isAvailable, */getLocation } = geoLocator;

let mockData = [1, 2, 3, 4, 5];

beforeAll(async () => {
  /* await test('available service', async () => {
    const data = await isAvailable();
    expect(data).toBe(true);
  }); */
  mockData = await mockData.map(async (el) => {
    const ip = `11${el}.22.33.13`;
    const city = await getLocation();
    return { ip, city };
  });
});


test('get-geo self', async () => {
  const data = await getLocation();
  expect(data.city).toBe('Moscow');
});

test('get-geo 234.22.33.13', async () => {
  const data = await getLocation('234.22.33.13');
  expect(data.city).toBe(undefined);
});

mockData.forEach((ip, city) => {
  test(`get-geo ${ip}`, async () => {
    const data = await getLocation(ip);
    expect(data.city).toBe(city);
  });
});
