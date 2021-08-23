import { bearArray, bearCreator } from './river';

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const formCreator = () => {
  const domString = `
  <form id ="formBear">
  <div><h1>BEAR TRACKER</h1></div>  
  <div class="mb-3">
      <label for="bearname" class="form-label">Name:</label>
      <input type="text" class="form-control" id="bearName" aria-describedby="bearName" required>
    <div class="mb-3">
      <label for="bearURL" class="form-label">Bear Image URL:</label>
      <input type="url" class="form-control" id="bearUrl" required>
    </div>
    <button type="submit" id="submitBtn" class="btn btn-primary">Submit</button>
  </form>
  `;
  renderToDom('#bearForm', domString);
};
const submitBtn = (event) => {
  event.preventDefault();
  const bear = {
    name: document.querySelector('#bearName').value,
    url: document.querySelector('#bearUrl').value,
    fishCaught: 0,
    attemptedFish: 0
  };
  bearArray.push(bear);
  bearCreator(bearArray);
  document.querySelector('#formBear').reset();
};
const formEvents = () => {
  const formElement = document.querySelector('#bearForm');
  formElement.addEventListener('submit', submitBtn);
};
export { formCreator, formEvents, renderToDom };
