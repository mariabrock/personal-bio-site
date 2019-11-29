import './projectCards.scss';
import projectData from '../../helpers/data/projectsData';
import utilities from '../../helpers/utilities';

const createProjectCards = () => {
  projectData.getProjectData()
    .then((projects) => {
      let domString = '';
      projects.forEach((project) => {
        domString += `
        <div id="card">
            <h2 id="title">${project.title}</h2>
            <img src="${project.screenshot}" alt="Image of ${project.title}" />
            <p>${project.description}</p>
            <p>${project.technologiesUsed}</p>
            <p id="linkToProject">${project.url}</p>
        </div>
        `;
      });
      utilities.printToDom('projectsPage', domString);
    })
    .catch((error) => console.error(error));
};

export default { createProjectCards };
