/* exported capitalize */
function capitalize(string) {
  var newString = string;
  return newString.charAt(0).toUpperCase() + newString.substring(1).toLowerCase();
}
