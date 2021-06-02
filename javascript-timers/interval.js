var text = document.querySelector('h1');

var textCurr = '4';

setInterval(changeText, 1000);

function changeText() {

  if (textCurr === '4') {
    text.textContent = '3';
    textCurr = '3';
  } else if (textCurr === '3') {
    text.textContent = '2';
    textCurr = '2';
  } else if (textCurr === '2') {
    text.textContent = '1';
    textCurr = '1';
  } else if (textCurr === '1') {
    text.textContent = '~Earth Beeeelooowww Us~';
    textCurr = '~Earth Beeeelooowww Us~';
  }
}
