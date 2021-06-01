function ExampleConstructor() {

}

console.log(typeof ExampleConstructor);

var newVar = new ExampleConstructor();

console.log(newVar);

var isInstanceOf = newVar instanceof ExampleConstructor;
console.log(isInstanceOf);
