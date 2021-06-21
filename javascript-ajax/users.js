var userList = document.getElementById('user-list');

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', handleLoad);
xhr.send();

function handleLoad() {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var userObject of xhr.response) {
    console.log(userObject);
    var li = document.createElement('li');
    li.textContent = userObject.name;
    userList.appendChild(li);
  }
}
