const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);
const operator = process.argv[3];
if (operator === 'plus') {
  console.log(add.add(x, y));
} else if (operator === 'minus') {
  console.log(subtract.subtract(x, y));
} else if (operator === 'times') {
  console.log(multiply.multiply(x, y));
} else if (operator === 'over') {
  console.log(divide.divide(x, y));
} else {
  console.log('eh?');
}
