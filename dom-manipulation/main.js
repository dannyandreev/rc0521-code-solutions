var newClick = document.querySelector('button');
newClick.addEventListener('click', handleClick);

var clickCount = 0;
var classHotButton = document.querySelector('.hot-button');
var classClickCount = document.querySelector('.click-count');

function handleClick(event) {
  clickCount++;
  classClickCount.innerText = 'Clicks: ' + clickCount;
  if (clickCount < 4) {
    classHotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    classHotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    classHotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    classHotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    classHotButton.className = 'hot-button hot';
  } else {
    classHotButton.className = 'hot-button nuclear';
  }
}
