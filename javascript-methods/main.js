var x = 10;
var y = 20;
var z = 99;
console.log(x + ', ' + y + ', ' + z + ', ');

var maximumValue = Math.max(x, y, z);
console.log(maximumValue);

var heroes = ['iron man', 'flash', 'silver surfer', 'ozone'];
console.log(heroes);

var randomNumber = Math.random();
console.log(randomNumber);

randomNumber = randomNumber * heroes.length;
console.log(randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);

var randomHero = heroes[randomIndex];
console.log(randomHero);

var library = [
  {
    title: 'snowcrash',
    author: 'Neal Stephenson'
  },
  {
    title: 'The Power Of Now',
    author: 'Eckhart Tolle '
  },
  {
    title: 'Fear and Loathing',
    author: 'Hunter S. Thompson'
  }
];
console.log(library);

var lastBook = library.pop();
console.log(lastBook);

var firstBook = library.shift();
console.log(firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1);
console.log(library);

var fullName = 'Danny Andreev';
console.log(fullName);

var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
console.log(firstName);

var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
