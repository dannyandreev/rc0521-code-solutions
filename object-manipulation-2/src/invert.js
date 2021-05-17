/* exported invert */
function invert(source) {
  var object = {};
  for (var prop in source) {
    object[source[prop]] = prop;

  }
  return object;
}
