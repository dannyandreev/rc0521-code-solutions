var newClick = document.querySelector('.click-button');
newClick.addEventListener('click', handleClick);

var newHover = document.querySelector('.hover-button');
newHover.addEventListener('mouseover', handleMouseOver);

var newDoubleClick = document.querySelector('.double-click-button');
newDoubleClick.addEventListener('dblclick', handleDoubleClick);

function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
