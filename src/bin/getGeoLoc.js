#!/usr/bin/env node
import { ArgumentParser } from 'argparse';
import getGeoLoc from '..';


const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Geo locator by ip',
});

parser.addArgument(
  ['-ip', '--ip'],
  { help: 'ip' },
);
console.log(getGeoLoc(Number(process.argv[process.argv.length - 1])));
