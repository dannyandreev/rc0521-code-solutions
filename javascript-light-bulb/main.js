var lightBulb = document.querySelector('.bulb');
var lightBackground = document.querySelector('.background');

lightBulb.addEventListener('click', handleClick);

function handleClick(event) {
  // console.log('click handle')
  if (lightBulb.className === 'bulb off') {
    lightBulb.className = 'bulb on';
    lightBackground.className = 'background on';
  } else {
    lightBulb.className = 'bulb off';
    lightBackground.className = 'background off';
  }
}
