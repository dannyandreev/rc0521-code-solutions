/* exported oddOrEven */
function oddOrEven(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray[i] = 'even';
    } else if ((array[i] + 1) % 2 === 0) {
      newArray[i] = 'odd';
    }
  }
  return newArray;
}
