const { Numeral } = require('./dist/numeral.js');

const thing = new Numeral(123.45);
console.log(thing.isPositive());
console.log(thing.isNegative());
