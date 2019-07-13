import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects/projects';
import scroller from './helpers/scrollPosition';
import degree from './helpers/degreeChanger';

const init = () => {
  projects.projectBuilder();
  scroller.scrollListener();
  setInterval(() => {
    degree.degreeChange();
  }, 35);
};

init();
