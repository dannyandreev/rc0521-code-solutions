/* exported capitalizeWords */
function capitalizeWords(string) {
  var strArray = string.split(' ');

  var newString = '';

  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1).toLowerCase();
    newString += strArray[i];
    if (i < strArray.length - 1) {
      newString += ' ';
    }
  }

  return newString;
}
