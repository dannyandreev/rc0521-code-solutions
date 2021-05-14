/* exported isLowerCased */
function isLowerCased(string) {
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase() && string.charAt(i) === string.charAt(i).toLowerCase()) {
      continue;
    } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      return false;
    }
  }
  return true;
}
