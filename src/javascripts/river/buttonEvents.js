// // import bearCreator from './bearCreator';
// import { bearArray, fishCaught, attemptCatch } from './bearData';

// const attemptTimeTracker = (event) => {
//   event.preventDefault();
//   const targetId = event.target.id;
//   if (targetId.startsWith('fishAttempt')) {
//     console.warn(targetId);
//     const fishAttempt = bearArray.splice(targetId, 1);
//     attemptCatch.push(fishAttempt[0]);
//     attemptCatch[0].attemptFishTime += `${Date.now()}  `;
//     attemptCatch[0].attemptedFish += 1;
//     console.warn(attemptCatch);
//   }
// };
// const fishCatcher = (event) => {
//   const targetId = event.target.id;
//   if (targetId.startsWith('fishCaught')) {
//     console.warn(event.target.id);
//     const caughtFish = bearArray.splice(targetId, 1);
//     fishCaught.push(caughtFish[0]);
//     fishCaught[0].fishCaughtTime += Date.now();
//     fishCaught[0].fishCaught += 1;
//     console.warn(fishCaught);
//   }
// };

// const buttonEvents = () => {
//   document.querySelector('#river').addEventListener('click', attemptTimeTracker);
//   document.querySelector('#river').addEventListener('click', fishCatcher);
// };

// export default buttonEvents;
