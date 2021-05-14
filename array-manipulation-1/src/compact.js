/* exported compact */
function compact(array) {
  var newArray = []
  var j = 0;
  for(var i = 0;i<array.length;i++){

    if(!(array[i] === null || array[i] === 0 || array[i] === false || array[i] === undefined || array[i] === '' || !(array[i]===array[i]))) {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray
}
