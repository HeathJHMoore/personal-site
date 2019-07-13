import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects/projects';
import scroller from './helpers/scrollPosition';
import degree from './helpers/degreeChanger';
import quote from './components/Quotes/Quotes';

const init = () => {
  setInterval(() => {
    quote.quoteChanger();
  }, 5000);
  projects.projectBuilder();
  scroller.scrollListener();
  setInterval(() => {
    degree.degreeChange();
  }, 35);
};

init();
