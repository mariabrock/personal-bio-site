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
        available: false,
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