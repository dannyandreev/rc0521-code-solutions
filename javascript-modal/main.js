var buttonOpen = document.querySelector('.open');
buttonOpen.addEventListener('click', handleClick);

var buttonClose = document.querySelector('.close');
buttonClose.addEventListener('click', handleClick);

var modal = document.querySelector('.modal');

function handleClick(event) {
  var className = event.target.className;
  // console.log('click handled '+ event.target.className)
  if (className === 'open text') {
    modal.style.display = 'block';
  } else if (className === 'close text') {
    modal.style.display = 'none';
  }
}
