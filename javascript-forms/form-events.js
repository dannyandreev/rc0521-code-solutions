document.getElementById('user-name').addEventListener('focus', handleFocus);
document.getElementById('user-name').addEventListener('blur', handleBlur);
document.getElementById('user-name').addEventListener('input', handleInput);

document.getElementById('user-email').addEventListener('focus', handleFocus);
document.getElementById('user-email').addEventListener('blur', handleBlur);
document.getElementById('user-email').addEventListener('input', handleInput);

document.getElementById('user-message').addEventListener('focus', handleFocus);
document.getElementById('user-message').addEventListener('blur', handleBlur);
document.getElementById('user-message').addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('input event fired');
  console.log(event.target.name);
  console.log(event.target.value);
}
