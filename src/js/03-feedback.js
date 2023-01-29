import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const dataForm = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(evt) {
  dataForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(dataForm);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedForm) {
    input.value = savedForm.email;
    textarea.value = savedForm.message;
  }
}
