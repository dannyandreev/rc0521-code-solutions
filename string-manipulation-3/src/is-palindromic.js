/* exported isPalindromic */
function isPalindromic(string) {
  string = string.replace(/\s+/g, '');

  for (var i = 0; i < string.length / 2; i++) {
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
      return false;
    }
  }
  return true;
}
