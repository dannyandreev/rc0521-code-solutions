/* exported defaults */
function defaults(target, source) {

  if (Object.keys(target).length === 0) {
    Object.assign(target, source);
  }

  for (var key in source) {
    if (target[key] === undefined) {

      target[key] = source[key];
    }
  }
}
