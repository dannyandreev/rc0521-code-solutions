/* exported difference */
function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    var repeats = false;
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        repeats = true;

      }
    }
    if (!repeats) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    repeats = false;
    for (j = 0; j < first.length; j++) {
      if (second[i] === first[j]) {
        repeats = true;

      }
    }
    if (!repeats) {
      newArray.push(second[i]);
    }
  }

  return newArray;
}
