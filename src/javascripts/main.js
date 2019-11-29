import 'bootstrap';

import utilities from '../javascripts/helpers/utilities';

console.log('this will be my site');

const createProjectsCards = (projectArray) => {
  let domString = '';
  for (let i = 0; i < projectArray.length; i+=) {
    const projectCard = projectArray[i];
    if (projectCard.available) {
      domString += `
        <div id="card">
            <h2 id="title">${projectCard.title}</h2>
            <img src="${projectCard.screenshot}" alt="Image of ${projectCard.title}" />
            <p>${projectCard.description}</p>
            <p>${projectCard.technologiesUsed}</p>
            <p id="linkToProject">${projectCard.url}</p>
        </div>
        `;
    }
  }
  utilities.printToDOM(domString, 'projectsPage');
};


const getBio = () => {
  const domString = `
            <p>Hi. My name's Maria. I'm a programmer and graphic designer who has a flair for anything handmade. If it's from space, I think it's cool. If you offer me coffee, you'll be my new best friend.</p> 

            <p>I have a background of 15 years of experience in diverse types of customer service industries. I've done eveything from making sandwiches to running said sandwich store. I've got a little corporate life under my  belt too. I'm currently working as a Project Manager for B2B corporate payment conversion campaigns.  I have a degree in Graphic Design from Western Kentucky University that I keep alive by illustrating/handlettering and crocheting in my free time.  I'm a puzzle solver, gamer, and free spirit who spends all the time I can with my Husband and my family.</p> 
                
            <p>I love a good challenge. Programming appeals to me because it combines so many things I love (and that I'm good at!). Each different language is a new opportunity to learn, and each new project puzzle is a chance to step outside my comfort zone!</p>
    `;
  printToDOM(domString, 'bioPage');
};

const buttonClick = (e) => {
  const buttonType = e.target.id;
  if (buttonType === 'bio') {
    getBio();
    document.getElementById('homePage').innerHTML = '';
    document.getElementById('technologiesPage').innerHTML = '';
    document.getElementById('project0sPage').innerHTML = '';
  } else if (buttonType === 'projects') {
    createProjectsCards(projects);
    document.getElementById('homePage').innerHTML = '';
    document.getElementById('technologiesPage').innerHTML = '';
    document.getElementById('bioPage').innerHTML = '';
  }
};

document.getElementById('home').addEventListener('click', buttonClick);
document.getElementById('bio').addEventListener('click', buttonClick);
document.getElementById('tech').addEventListener('click', buttonClick);
document.getElementById('projects').addEventListener('click', buttonClick);
