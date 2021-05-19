document.getElementById('contact-form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var inputs = document.getElementById('contact-form').elements;
  var formInput = {};
  formInput.name = inputs[0].value;
  formInput.email = inputs[1].value;
  formInput.text = inputs[2].value;

  console.log(formInput);
  formInput.reset();
}
