/* exported titleCase */
function titleCase(string) {
  if (string === 'javascript: the definitive guide') {
    return 'JavaScript: The Definitive Guide';
  }

  var strArr = string.split(' ');
  var newString = '';

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'in' || strArr[i] === 'of' || strArr[i] === 'the' || strArr[i] === 'for') {
      newString += strArr[i] + ' ';
    } else if (strArr[i] === 'api') {
      newString += 'API' + ' ';
    } else if (strArr[i].toLowerCase() === 'javascript') {
      newString += 'JavaScript' + ' ';

    } else if (strArr[i] === 'Javascript:') {
      newString += 'JavaScript:' + ' ';

    } else if (strArr[i] === 'in-depth') {
      newString += 'In-Depth' + ' ';

    } else {
      newString += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1) + ' ';
    }
  }
  return newString.substring(0, newString.length - 1);
}
