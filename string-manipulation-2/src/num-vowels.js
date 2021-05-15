/* exported numVowels */
function numVowels(string) {
  var num = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() === 'a' || string.charAt(i).toLowerCase() === 'e' || string.charAt(i).toLowerCase() === 'o' || string.charAt(i).toLowerCase() === 'u' || string.charAt(i).toLowerCase() === 'i') {
      num++;
    }
  }
  return num;
}
