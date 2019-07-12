import $ from 'jquery';


const scrollListener = () => {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      document.getElementById('myNavbar').classList.remove('fadeOutBackground');
      document.getElementById('myNavbar').classList.add('fadeInBackground');
    } else {
      document.getElementById('myNavbar').classList.remove('fadeInBackground');
      document.getElementById('myNavbar').classList.add('fadeOutBackground');
    }
  });
  window.addEventListener('scroll', scrollFadeIn);
};

export default { scrollListener };
