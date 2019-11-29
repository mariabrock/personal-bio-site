import firebase from 'firebase';
import '../styles/main.scss';
import 'bootstrap';

import apiKeys from '../../apiKeys.json';
import projectCards from './components/projectCards/projectCards';

console.error('this will be my site');

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectCards.createProjectCards();
};

init();
