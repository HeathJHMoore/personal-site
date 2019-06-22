import getProjects from './getProjects';
import util from '../../helpers/util';

const projectBuilder = () => {
  getProjects.getProjects()
    .then((projects) => {
      console.error(projects);
      let domString = '';
      projects.forEach((project) => {
        domString += '<div class="col-12 col-sm-12 col-md-6 col-lg-4">';
        domString += `<div class="card" id="${project.id}">`;
        domString += '<div class="card-body">';
        domString += `<h2 class="card-title">${project.name}</h2>`;
        domString += '<p class="card-text">Another cool project for my portfolio</p>';
        domString += '<h4 class="text-center" style="border-bottom: solid 1px gray;">Authors</h4>';
        domString += '<div class="row d-flex justify-content-around">';
        project.authors.forEach((author) => {
          domString += `<p class="col-3 col-md-4 text-center">${author}</p>`;
        });
        domString += '</div>';
        domString += `<a href=${project.url} class="btn btn-primary" target="_blank">Check out this project!</a>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      util.printToDom('projectsContainer', domString);
    })
    .catch();
};

export default { projectBuilder };
