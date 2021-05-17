/* exported reverseWords */
function reverseWords(string) {
  var strArr = string.split(' ');
  var newString = '';
  for (var i = 0; i < strArr.length; i++) {
    for (var j = strArr[i].length; j >= 0; j--) {
      newString += strArr[i].charAt(j);
    }
    newString += ' ';
  }
  return newString.substring(0, newString.length - 1);
}
