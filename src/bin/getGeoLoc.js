#!/usr/bin/env node
import GeoIp from '..';
import program from 'commander';
import { version } from '../../package.json';

program // todo
  .version(version)
  .usage('get-geo [ip] [prop]')
  .arguments('[ip][prop]')
  .action(async (ip, prop = 'city') => {
    const geo = new GeoIp();
    try {
      const geoInfo = await geo.getLocation(ip);
      console.log(geoInfo.get(prop));
    } catch (e) {
      console.log(e.message);
    }
  })
  .parse(process.argv);
