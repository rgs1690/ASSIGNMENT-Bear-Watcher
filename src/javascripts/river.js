import { renderToDom } from './bearForm';

const bearArray = [];
// create an array for fishCaught and Attempt to catch fish
const bearCreator = (array) => {
  let domString = '';
  array.forEach((bear, i) => {
  // filter arrays for attempt and successful caught fish for current bear
  // const caughtDomString = "";
    // do foreach loop for html for caught fish
    // do same loop for attempt
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
};
//  interpolate caughtdomstring in the div on line 22 and 24
// const fishTimeTracker = () => {
//   let domString = '';
//   domString += new Date();
//   renderToDom('#caughtDisplay', domString);
// };
// const timeTracker = () => {
//   let domString = '';
//   domString += new Date();

//   renderToDom('#attemptDisplay', domString);
// };
// const fishCatcher = () => {
//   let count = 0;
//   count += 1;
//   renderToDom('#totalDisplay', count);
// };
// const handleBtns = (event) => {
//   event.preventDefault();
//   if (event.target.id.startsWith('fishAttempt')) {
//     console.warn(event.target.id);
//     timeTracker();
//     console.warn(event.target.id);
//     fishCatcher();
//     fishTimeTracker();
//   }
// };
// const buttonEvents = () => {
//   document.querySelector('#river').addEventListener('click', handleBtns);
// };
export { bearArray, bearCreator };
