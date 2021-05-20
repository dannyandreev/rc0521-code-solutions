var tabContainer = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
var viewNodeList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    // console.log('tab')
    tabNodeList.forEach(
      function (currentValue) {
        if (currentValue === event.target) {
          currentValue.className = 'tab active';
        } else {
          currentValue.className = 'tab';
        }
      }
    );

    var dataView = event.target.getAttribute('data-view');

    viewNodeList.forEach(
      function (currentValue) {
      // console.log(currentValue)
        if (currentValue.getAttribute('data-view') === dataView) {
          currentValue.className = 'view';
        } else {
          currentValue.className = 'view hidden';
        }
      }
    );
  }
}
