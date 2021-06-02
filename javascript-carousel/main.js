var image = document.querySelector('img');
var imageNames = ['001.png', '004.png', '007.png', '025.png', '039.png'];
var imageNext = 1;

var dots = ['select0', 'select1', 'select2', 'select3', 'select4'];

var imageLeft = document.getElementById('left');
var imageRight = document.getElementById('right');

imageLeft.addEventListener('click', handleClick);
imageRight.addEventListener('click', handleClick);

var intervalID = setInterval(cycleImage, 3000);

function cycleImage() {
  incImage(1);
}

function incImage(inc) {
  image.setAttribute('src', './images/' + imageNames[imageNext]);

  for (var id in dots) {
    document.getElementById(dots[id]).className = 'dot';
  }
  document.getElementById(dots[imageNext]).className = 'dotSelect';

  if (imageNext === 0 && inc === -1) {
    imageNext = 4;

  } else if (imageNext === 4 && inc === 1) {
    imageNext = 0;
  } else {
    imageNext += inc;
  }
}

function handleClick(event) {
  clearInterval(intervalID);
  intervalID = setTimeout(resumeCycle, 0);
  if (event.target.id === 'left') {
    incImage(-1);
  } else if (event.target.id === 'right') {
    incImage(1);
  }
}

function resumeCycle() {
  intervalID = setInterval(cycleImage, 3000);
}
