import firebase from 'firebase';
import '../styles/main.scss';
import 'bootstrap';

import apiKeys from './helpers/apiKeys.json';
import projectCards from './components/projectCards/projectCards';

console.log('this will be my site');

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectCards.createProjectCards();
};

init();
