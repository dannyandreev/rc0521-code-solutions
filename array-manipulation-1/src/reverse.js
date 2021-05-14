/* exported reverse */
function reverse(array){
  var newArray = []

 for(var i = 0;i<array.length;i++) {
     newArray[(array.length-1)-i]=array[i]
  }

  return newArray
}
