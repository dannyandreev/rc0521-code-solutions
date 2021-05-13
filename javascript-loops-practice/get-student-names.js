/* exported getStudentNames */
function getStudentNames(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i].name);
  }
  return newArray;
}
