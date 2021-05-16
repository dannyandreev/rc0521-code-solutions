/* exported omit */
function omit(source, keys) {
  var object = Object.assign({}, source);

  for (var prop in object) {
    for (var key of keys) {
      if (key === prop) {
        delete object[key];
      }
    }
  }

  return object;
}
