/* exported unique */
function unique(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var repeats = false;
    for (var j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        repeats = true;
      }
    }
    if (!repeats) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
