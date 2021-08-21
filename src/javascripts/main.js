import '../styles/main.scss';
import 'bootstrap';

const bearArray = [];
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
const fishTimeTracker = () => {
  let domString = '';
  domString += new Date();
  renderToDom('#caughtDisplay', domString);
};
const timeTracker = () => {
  let domString = '';
  domString += new Date();
  renderToDom('#attemptDisplay', domString);
};
const fishCatcher = () => {
  let count = 0;
  count += 1;
  renderToDom('#totalDisplay', count);
};
const handleBtns = (event) => {
  event.preventDefault();
  if (event.target.id.startsWith('fishAttempt')) {
    console.warn(event.target.id);
    timeTracker();
  }
  if (event.target.id.startsWith('fishCaught')) {
    console.warn(event.target.id);
    fishCatcher();
    fishTimeTracker();
  }
};
const bearCreator = (array) => {
  let domString = '';
  array.forEach((bear, i) => {
    domString += `
  <div id="bearCard" class="card" style="width: 18rem;">
  <img src=${bear.url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${bear.name}</h5>
    <button type="button" id='fishAttempt-${i}' class="btn btn-primary">Attempted to Catch Fish</button>
    <button type="button" id='fishCaught-${i}' class="btn btn-success">Caught a Fish!</button>
    <div>Attempt to catch Fish:</div>
    <div id='attemptDisplay'></div>
    <div>Caught Fish:</div>
    <div id='caughtDisplay'></div>
    <div>Total Fish Caught:</div>
    <div id='totalDisplay'></div>
  </div>
</div>
  `;
  });
  renderToDom('#river', domString);
  // document.querySelector('#river').addEventListener('click', handleBtns);
  // const btns = document.querySelectorAll('#river');
  // btns.forEach((btn) => {
  //   btn.addEventListener('click', handleBtns);
  // });
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
const buttonEvents = () => {
  document.querySelector('#river').addEventListener('click', handleBtns);
};
const init = () => {
  formCreator();
  formEvents();
  buttonEvents();
};

init();
