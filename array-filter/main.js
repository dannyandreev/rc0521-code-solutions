const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
let evenNumbers = numbers.filter(num => (num % 2 === 0))
console.log(evenNumbers)

let overFive = numbers.filter(num => (num > 5))
console.log(overFive)

let startWithE = names.filter(name => (name[0] === 'E'))
console.log(startWithE)

let haveD = names.filter(name => (name.includes('D') | name.includes('d')))
console.log(haveD)
