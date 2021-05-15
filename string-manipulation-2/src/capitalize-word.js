/* exported capitalizeWord */
function capitalizeWord(string) {
  var newString;
  newString = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  if (newString === 'Javascript') {
    return 'JavaScript';
  } else {
    return newString;
  }
}
