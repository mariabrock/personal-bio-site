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

// const buttonClick = (e) => {
//   const buttonType = e.target.id;
//   if (buttonType === 'bio') {
//     getBio();
//     document.getElementById('homePage').innerHTML = '';
//     document.getElementById('technologiesPage').innerHTML = '';
//     document.getElementById('project0sPage').innerHTML = '';
//   } else if (buttonType === 'projects') {
//     createProjectsCards(projects);
//     document.getElementById('homePage').innerHTML = '';
//     document.getElementById('technologiesPage').innerHTML = '';
//     document.getElementById('bioPage').innerHTML = '';
//   }
// };

// document.getElementById('home').addEventListener('click', buttonClick);
// document.getElementById('bio').addEventListener('click', buttonClick);
// document.getElementById('tech').addEventListener('click', buttonClick);
// document.getElementById('projects').addEventListener('click', buttonClick);
