/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  for (;currentNumber <= 10; currentNumber++) {
    numbers.push(currentNumber);
  }
  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  for (;currentNumber <= 20; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';

  for (;count <= times; count++) {
    repeated += word;
  }
  return repeated;

}
console.log(repeatWord('derp', 10));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string.charAt(i));
  }
}
logEachCharacter('funkadelic');

function doubleAll(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray[i] = array[i] * 2;
  }
  return newArray;
}
console.log(doubleAll([0, 1, 1, 2, 3, 5, 8, 13]));

function getKeys(object) {
  var keys = [];
  for (const prop in object) {
    keys.push(prop);
  }
  return keys;
}
console.log(getKeys({ a: 1, b: 2, c: 3 }));

function getValues(object) {
  var values = [];
  for (const prop in object) {
    values.push(object[prop]);
  }
  return values;
}
console.log(getValues({ a: 1, b: 2, c: 3 }));
