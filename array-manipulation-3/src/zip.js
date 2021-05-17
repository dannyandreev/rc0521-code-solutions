/* exported zip */
function zip(first, second) {
  var newArray = [];
  var length;
  if (first.length > second.length) {
    length = second.length;
  } else {
    length = first.length;
  }

  for (var i = 0; i < length; i++) {
    newArray.push([first[i], second[i]]);
  }

  return newArray;
}
