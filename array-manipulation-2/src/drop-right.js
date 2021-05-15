/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  for (var i = 0; i < (array.length - count); i++) {
    newArray[i] = array[i];
  }
  return newArray;
}
