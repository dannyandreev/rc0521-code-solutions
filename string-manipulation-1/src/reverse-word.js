/* exported reverseWord */
function reverseWord(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    newString = newString + string.charAt(string.length - 1 - i);
  }
  return newString;
}
