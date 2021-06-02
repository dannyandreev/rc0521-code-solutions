var text = document.querySelector('h1');

setTimeout(changeText, 1000);

function changeText() {
  text.textContent = 'Hello World';
}
