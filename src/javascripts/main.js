import '../styles/main.scss';
import 'bootstrap';
import { formCreator, formEvents } from './bearForm';

const init = () => {
  formCreator();
  formEvents();
  // buttonEvents();
};

init();
