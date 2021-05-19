
document.addEventListener('keydown', handleType);

var sentenceDisplay = document.querySelector('.userInput');

var index = 0;
var sentence = 'grumpy wizards make toxic brew';
var sentenceArray = sentence.split('');

for (var i = 0; i < sentenceArray.length; i++) {
  var newElement = document.createElement('span');
  newElement.setAttribute('id', i);
  newElement.textContent = sentence.charAt(i);
  if (i === 0) {
    newElement.classList.add('underline');
  }
  sentenceDisplay.appendChild(newElement);
}

// for(var i = 0;i<sentenceArray.length;i++) {
//   // document.querySelector("[class='"+i+"']").classList.add(i*10)
//   var selectedElement = document.querySelector("[class='"+i+"']")
//   selectedElement.classList.add('green')
// }

// for(var i = 0;i<sentenceArray.length;i++) {
//    var selectedElement = document.querySelector("[id='"+i+"']")
//    selectedElement.classList.add('green')
//  }

function handleType(event) {
  var keyPressed = event.key;
  var elementIndexed = document.querySelector("[id='" + index + "']");
  if (index === sentence.length) {
    var elementIndexedNext = elementIndexed;
    var elementIndexedBefore = document.querySelector("[id='" + (index - 1) + "']");
  } else if (index === 0) {
    elementIndexedNext = document.querySelector("[id='" + (index + 1) + "']");
    elementIndexedBefore = elementIndexed;
  } else {
    elementIndexedNext = document.querySelector("[id='" + (index + 1) + "']");
    elementIndexedBefore = document.querySelector("[id='" + (index - 1) + "']");
  }

  if (isLetter(keyPressed) || keyPressed === ' ') {
    keyPress(elementIndexed, elementIndexedNext, elementIndexedBefore, keyPressed);
    if (index < sentence.length) {
      index++;
    }
  } else if (keyPressed === 'Backspace') {
    backspace(elementIndexed, elementIndexedNext, elementIndexedBefore);
    if (index > 0) {
      index--;
    }
  }
}

function keyPress(elementIndexed, elementIndexedNext, elementIndexedBefore, key) {
  if (key === sentence.charAt(index)) {
    elementIndexed.classList.remove('black', 'red');
    elementIndexed.classList.add('green');
  } else {
    elementIndexed.classList.remove('black', 'green');
    elementIndexed.classList.add('red');
  }
  elementIndexedBefore.classList.remove('underline');
  elementIndexed.classList.remove('underline');
  if (index + 1 < sentence.length) {
    elementIndexedNext.classList.add('underline');
  }
}

function backspace(elementIndexed, elementIndexedNext, elementIndexedBefore) {
  if (index + 1 < sentence.length) {
    elementIndexedNext.classList.remove('green', 'red');
  }
  if (index > 0) {
    elementIndexedBefore.classList.remove('green', 'red');
    if (index < sentence.length) {
      elementIndexed.classList.remove('underline');
    }
    elementIndexedBefore.classList.add('underline');
  }
  if (index === sentence.length) {
    elementIndexedBefore.classList.remove('green', 'red');
    elementIndexedBefore.classList.add('black');
  } else {
    elementIndexed.classList.remove('green', 'red');
    elementIndexed.classList.add('black');
  }

}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
