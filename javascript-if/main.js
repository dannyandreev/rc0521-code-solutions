/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return (number < 5);
}

function isEven(number) {
  return (number % 2 === 0);
}

function startsWithJ(string) {
  return (string.charAt(0) === 'J');
}

function isOldEnoughToDrink(person) {
  return (person.age >= 18);
}

function isOldEnoughToDrive(person) {
  return (person.age >= 16);
}

function isOldEnoughToDrinkAndDrive(person) {
  return (false);
}

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return ('acid');
  } else if (pH > 7 && pH <= 14) {
    return ('base');
  } else if (pH === 7) {
    return ('neutral');
  } else {
    return ('invalid pH level');
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return ("We're the warner brothers!");
  } else if (name === 'dot') {
    return ("I'm cute~");
  } else {
    return ('Goodnight everybody!');
  }
}

// console.log(isUnderFive(4))
// // true
// console.log(isUnderFive(10))
// // false
// console.log(isUnderFive(5))
// // false

// console.log(isEven(4))
// // true
// console.log(isEven(10))
// // true
// console.log(isEven(5))
// // false

// console.log(startsWithJ('JavaScript'))
// // true
// console.log(startsWithJ('PHP'))
// // false
// console.log(startsWithJ('HTML'))
// // false
// console.log(startsWithJ('Java'))
// // true
// console.log(startsWithJ('Kotlin'))
// // false
// console.log(startsWithJ('C#'))
// // false

// var bart = {
//   name: 'Bartholomew JoJo Simpson',
//   age: 10
// };

// console.log(isOldEnoughToDrink(bart))
// // false

// console.log(categorizeAcidity(-1))
// // "invalid pH level"
// console.log(categorizeAcidity(14.0000001))
// // "invalid pH level"
// console.log(categorizeAcidity(7))
// // "neutral"
// console.log(categorizeAcidity(2))
// // "acid"
// console.log(categorizeAcidity(9))
// // "base"

// console.log(introduceWarnerBro('yakko'))
// // "We're the warner brothers!"
// console.log(introduceWarnerBro('wakko'))
// // "We're the warner brothers!"
// console.log(introduceWarnerBro('dot'))
// // "I'm cute~"
// console.log(introduceWarnerBro('cody'))
// // "Goodnight everybody!"
// console.log(introduceWarnerBro('minerva'))
// // "Goodnight everybody!"
