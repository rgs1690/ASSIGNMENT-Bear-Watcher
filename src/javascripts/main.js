import '../styles/main.scss';
import 'bootstrap';
import formCreator from './bearForm/formCreator';
import formEvents from './bearForm/formEvents';

const init = () => {
  formCreator();
  formEvents();
  // buttonEvents();
};

init();
