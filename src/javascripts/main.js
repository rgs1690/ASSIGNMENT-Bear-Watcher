import '../styles/main.scss';
import 'bootstrap';
import formCreator from './bearForm/formCreator';
import formEvents from './bearForm/formEvents';
import buttonEvents from './river/buttonEvents';

const init = () => {
  formCreator();
  formEvents();
  buttonEvents();
};

init();
