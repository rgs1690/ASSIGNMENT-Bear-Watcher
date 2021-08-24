import bearArray from '../river/bearData';
import bearCreator from '../river/bearCreator';

const submitBtn = (event) => {
  event.preventDefault();
  const bear = {
    name: document.querySelector('#bearName').value,
    url: document.querySelector('#bearUrl').value,
    fishCaught: 0,
    fishCaughtTime: '',
    attemptedFish: 0,
    attemptFishTime: ''
  };
  bearArray.push(bear);
  bearCreator(bearArray);
  document.querySelector('#formBear').reset();
};

const formEvents = () => {
  const formElement = document.querySelector('#bearForm');
  formElement.addEventListener('submit', submitBtn);
};
export default formEvents;
