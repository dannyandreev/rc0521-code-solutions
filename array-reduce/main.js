const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

let sum = numbers.reduce((number, currNum) => number + currNum)
console.log(sum)

let product = numbers.reduce((number, currNum) => number* currNum )
console.log(product)

const balancer = (total, transaction) => {
  if(transaction.type === "deposit") {
    return (total + transaction.amount)
  } else if(transaction.type === "withdrawal") {
    return (total - transaction.amount)
  }
}

let balance = account.reduce(balancer, 0)
console.log(balance)

const traitSummer = (obj, currTrait) => {
  obj[Object.keys(currTrait)[0]] = Object.values(currTrait)[0]
  return obj
}

let composite = traits.reduce(traitSummer)

console.log(composite)
