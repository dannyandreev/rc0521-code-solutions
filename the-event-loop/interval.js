let count = 3;
const timer = setInterval(function () {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(timer);
    return;
  }
  console.log(count);
  count--;
}, 1000);
