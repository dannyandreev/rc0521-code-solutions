/* exported union */
function union(first, second) {
  var newArray = first;

  for (var i = 0; i < second.length; i++) {
    var repeats = false;
    for (var j = 0; j < newArray.length; j++) {
      if (second[i] === newArray[j]) {
        repeats = true;
      }
    }
    if (!repeats) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
