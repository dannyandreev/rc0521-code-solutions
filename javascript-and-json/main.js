var bookArray = [
  {
    isbn: 123,
    title: 'css',
    author: 'john'
  },
  {
    isbn: 456,
    title: 'html',
    author: 'dave'
  },
  {
    isbn: 789,
    title: 'js',
    author: 'bob'
  }
];

console.log(bookArray);
console.log(typeof bookArray);

var BookString = JSON.stringify(bookArray);
console.log(BookString);
console.log(typeof BookString);

var jsonStudent = '{"id":13,"name":"Danny"}';
console.log(jsonStudent);
console.log(typeof jsonStudent);

var studentObject = JSON.parse(jsonStudent);
console.log(studentObject);
console.log(typeof studentObject);
