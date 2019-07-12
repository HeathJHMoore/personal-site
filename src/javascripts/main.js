import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects/projects';
import scroller from './helpers/scrollPosition';

const init = () => {
  projects.projectBuilder();
  scroller.scrollListener();
};

init();
