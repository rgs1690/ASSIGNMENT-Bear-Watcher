import renderToDom from '../bearForm/renderToDom';
import { fishCaught, attemptCatch } from './bearData';

const filterAttempt = attemptCatch.filter((bear) => bear.attemptedFish);
const filterAttemptTime = attemptCatch.filter((bear) => bear.attemptFishTime);
const filterCaughtFish = fishCaught.filter((bear) => bear.fishCaught);
const filterCaughtFishTime = fishCaught.filter((bear) => bear.attemptFishTime);
// console.warn(filterAttempt);
// console.warn(filterAttemptTime);
// console.warn(filterCaughtFish);
// console.warn(filterCaughtFishTime);
const bearCreator = (array) => {
  let domString = '';
  array.forEach((bear, i) => {
  // // filter arrays for attempt and successful caught fish for current bear
  // // do same loop for attempt
    let attemptTimeDomString = '';
    filterAttemptTime.forEach((attempt) => {
      attemptTimeDomString += attempt.attemptFishTime;
    });
    let attemptDomString = '';
    filterAttempt.forEach((attempt) => {
      attemptDomString += attempt.attemptedFish;
    });
    let caughtDomString = '';
    filterCaughtFish.forEach((attempt) => {
      caughtDomString += attempt.fishCaught;
    });
    let caughtTimeDomString = '';
    filterCaughtFishTime.forEach((attempt) => {
      caughtTimeDomString += attempt.attemptFishTime;
    });
    // do foreach loop for html for caught fish
    // const caughtDomString = "";
    domString += `
    <div id="bearCard-${i}" class="card" style="width: 18rem;">
    <img src=${bear.url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${bear.name}</h5>
         <button type="button" id='fishAttempt-${i}' class="btn btn-primary">Attempted to Catch Fish</button>
       <button type="button" id='fishCaught-${i}' class="btn btn-success">Caught a Fish!</button>
        <div>Attempt to catch Fish:</div>
         <div >${attemptDomString}</div>
         <div ${attemptTimeDomString}></div>
         <div>Total Fish Caught:</div>
         <div id='caughtDisplay'>${caughtDomString}</div>
          <div id='totalDisplay'>${caughtTimeDomString}</div>
       </div> 
  </div>
    `;
  });
  renderToDom('#river', domString);
};
//  interpolate caughtdomstring in the div on line 22 and 20
//  interpolate attemptdomstring in div on line 18

export default bearCreator;
