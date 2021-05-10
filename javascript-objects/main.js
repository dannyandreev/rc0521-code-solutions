var student = {
  firstName: 'Danny',
  lastName: 'Andreev',
  age: '24'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ' + fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Robotics Engineer';

console.log('liveInIrvine: ' + student.livesInIrvine);
console.log('previousOccupation: ' + student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2017
};

vehicle['isConvertible'] = false;
vehicle['color'] = 'white';

console.log('vehicle isCovertible: ' + vehicle.isConvertible);
console.log('vehicle color: ' + vehicle.color);

console.log(vehicle);

var pet = {
  name: 'bobert',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log(pet);
