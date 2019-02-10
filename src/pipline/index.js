const getFileNames = () => [
  '.qwerq',
  'gsdfga',
  'wervbxs',
  'rrtygfhj',
  'rrrrrrs',
];

const middle = (el, idx, list) => idx === Math.round(list.length / 2);

class Main {
  static main() {
    const plural = (str, symbol) => (str.endsWith('s') ? str : `${str}${symbol}`);
    const files = getFileNames();

    files.filter(str => str[0] !== '.')
      .sort()
      .filter(middle)
      .map(el => plural(el, 's'))
      .map(el => el.toUpperCase())
      .reduce((acc, el, idx, arr) => {
        console.log(arr);
        arr.length = 0;
        return null;
      }, []);
  }
}


new Main().main();
