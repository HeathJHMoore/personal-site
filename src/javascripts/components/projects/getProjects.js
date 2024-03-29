import axios from 'axios';

import keys from '../../../data/apiKeys.json';

const firebaseUrl = keys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/Projects.json`)
    .then((resp) => {
      const projectResults = resp.data;
      const projects = [];
      Object.keys(projectResults).forEach((projectId) => {
        projectResults[projectId].id = projectId;
        projects.push(projectResults[projectId]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getProjects };
