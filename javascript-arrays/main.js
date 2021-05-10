var colors = ['red', 'white', 'blue'];

for (var i = 0; i < 3; i++) {
  console.log(colors[i]);
}

console.log('America is ' + colors[0] + ' ' + colors[1] + ' ' + colors[2]);

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ' ' + colors[1] + ' ' + colors[2]);

console.log(colors);

var students = ['Danny', 'Dave', 'Bob', 'Alex'];

var numberOfStudents = students.length;
console.log('the number of students is: ' + numberOfStudents);
var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];

console.log('the last student is: ' + lastStudent);

console.log(students);
