/* exported chunk */
function chunk(array, count) {
  var newArray = [];
  var groups = [];

  for (var element of array) {
    groups.push(element);
    if (groups.length === count) {
      newArray.push(groups);
      groups = [];
    }
  }

  if (groups.length > 0) {
    newArray.push(groups);
  }

  return newArray;
}
