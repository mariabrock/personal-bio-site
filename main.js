console.log("this will be my site");

const projects = [
    {
        title: "Cool Project", 
        screenshot: "https://carloselopez.files.wordpress.com/2015/03/project-management.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/mariabrock", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/mariabrock"
    },

    {
        title: "Cool Project", 
        screenshot: "https://carloselopez.files.wordpress.com/2015/03/project-management.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/mariabrock", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/mariabrock"
    }
]

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const createProjectsCards = (projectArray) => {
    let domString = ''
    for (let i = 0; i < projectArray.length; i++) {
        const projectCard = projectArray[i];
        if (projectCard.available) {domString += `
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
    printToDOM(domString, 'projectsPage');
  };


createProjectsCards(projects);

const getBio = () => {
    let domString = `
    <div class="card-body">
            <p>Hi. My name's Maria. I'm a programmer and graphic designer who has a flair for anything handmade. If it's from space, I think it's cool. If you offer me coffee, you'll be my new best friend.</p> 

            <p>I have a background of 15 years of experience in diverse types of customer service industries. I've done eveything from making sandwiches to running said sandwich store. I've got a little corporate life under my  belt too. I'm currently working as a Project Manager for B2B corporate payment conversion campaigns.  I have a degree in Graphic Design from Western Kentucky University that I keep alive by illustrating/handlettering and crocheting in my free time.  I'm a puzzle solver, gamer, and free spirit who spends all the time I can with my Husband and my family.</p> 
                
            <p>I love a good challenge. Programming appeals to me because it combines so many things I love (and that I'm good at!). Each different language is a new opportunity to learn, and each new project puzzle is a chance to step outside my comfort zone!</p>
    </div>`
    printToDOM(domString, 'bioPage')
  };

const buttonClick = (e) =>{
        const buttonType = e.target.id;
        if (buttonType === 'nav-item nav-link')
        getBio()
    };

document.getElementById('bio').addEventListener('click', buttonClick);
document.getElementById('tech').addEventListener('click', buttonClick);
document.getElementById('projects').addEventListener('click', buttonClick);