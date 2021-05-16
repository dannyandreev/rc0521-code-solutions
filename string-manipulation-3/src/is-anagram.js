/* exported isAnagram */
function isAnagram(first, second) {
  first = first.replace(/\s+/g, '');
  second = second.replace(/\s+/g, '');

  if (first.split('').sort().join() === second.split('').sort().join()) {
    return true;
  } else {
    return false;
  }
}
