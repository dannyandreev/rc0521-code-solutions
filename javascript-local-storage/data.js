/* exported todos */

var todos = [];

if (localStorage.getItem('javascript-local-storage') !== null) {
  todos = JSON.parse(localStorage.getItem('javascript-local-storage'));
}

window.addEventListener('beforeunload', handleBeforeUnload);

function handleBeforeUnload() {
  var todoJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todoJSON);
}
