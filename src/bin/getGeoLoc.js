#!/usr/bin/env node
import GeoIp from '..';
import program from 'commander';
// import { version } from '../../package.json';

program
  // .version(version)
  .usage('geoip [ip] [prop]')
  .arguments('"[ip]","[prop]"')
  .action(async (ip, prop) => {
    const geo = new GeoIp();
    try {
      const ipAddr = typeof ip === 'string' ? ip : '';// fixme: geoip country
      const property = typeof prop === 'string' ? prop : 'city';// fixme
      const geoInfo = await geo.getLocation(ipAddr);
      console.log(geoInfo.get(property));
    } catch (e) {
      console.log(e.message);
    }
  })
  .parse(process.argv);
