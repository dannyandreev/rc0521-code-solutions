/* exported isUpperCased */
function isUpperCased(string) {
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase() && string.charAt(i) === string.charAt(i).toLowerCase()) {
      continue;
    } else if (string.charAt(i) === string.charAt(i).toLowerCase()) {
      return false;
    }
  }
  return true;
}
