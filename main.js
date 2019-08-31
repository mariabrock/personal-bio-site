console.log("this will be my site");

const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/mariabrock", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/mariabrock"
    },

    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
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
    for (let i = 0; i < procjectArray.length; i++) {
        const projectCard = projectArray[i];
        domString += `
        <div id="">
            <h2 id="">${petCard.name}</h2>
            <img src="${petCard.imageUrl}" alt="Image of ${petCard.name}" />
            <p>Color: ${petCard.color}</p>
            <p>Special Skill: ${petCard.specialSkill}</p>
            <h2 id="">${petCard.type}</h2>
        </div>
        `;
    }
    printToDOM(domString, 'projectsPage');
  };

const buttonClick = (e) => {
    const petType = e.target.id;
    const selectedPets = [];
    for (let i = 0; i < petSelector.length; i++) {
        const thisPet = petSelector[i];
        if (thisPet.type === petType) {
            selectedPets.push(thisPet);
        }
    }
    if (petType === '') {
        petBuilder(petSelector);
    } else {
        petBuilder(selectedPets);
    }
}

  document.getElementById('').addEventListener('click', buttonClick)