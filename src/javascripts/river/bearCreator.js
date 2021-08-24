import renderToDom from '../bearForm/renderToDom';
import { bearArray, fishCaught, attemptCatch } from './bearData';

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
//  interpolate caughtdomstring in the div on line 22 and 20
//  interpolate attemptdomstring in div on line 18

const attemptTimeTracker = (event) => {
  const targetId = event.target.id;
  if (targetId.startsWith('fishAttempt')) {
    console.warn(event.target.id);
    const fishAttempt = bearArray.splice(targetId, 1);
    attemptCatch.push(fishAttempt[0]);
    fishAttempt.bear.attemptFishTime += Date.now();
    fishAttempt.bear.attemptedFish += 1;
  }
};
const fishCatcher = (event) => {
  const targetId = event.target.id;
  if (targetId.startsWith('fishCaught')) {
    console.warn(event.target.id);
    const caughtFish = bearArray.splice(targetId, 1);
    fishCaught.push(caughtFish[0]);
    fishCaught.bear.fishCaughtTime += Date.now();
    fishCaught.bear.fishCaught += 1;
  }
};

const buttonEvents = () => {
  document.querySelector('#river').addEventListener('click', attemptTimeTracker);
  document.querySelector('#river').addEventListener('click', fishCatcher);
};

export { bearCreator, buttonEvents };
