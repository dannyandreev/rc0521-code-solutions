var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', handleClick);

function handleClick(evennt) {

  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}
