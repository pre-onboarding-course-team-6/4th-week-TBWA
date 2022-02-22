import { $ } from './utils/utils.js';

const initImage = () => {
  const IMAGE = $('#image');

  setImageSlide('#image');

  function setImageSlide(selector) {
    const $selector = $(selector);
    const slideAll = $selector.querySelectorAll('ul.image-small__inner > li')
    const numSlide = slideAll.length;
    const PrevBtn = $selector.querySelector('.control > a.prev');
    const NextBtn = $selector.querySelector('.control > a.next');

    function showSlide(n) {
      let slideNow = n;
      let slidePrev = (n === 1) ? numSlide : (n - 1);
      let slideNext = (n === numSlide) ? 1 : (n + 1);

      for (let i = 0; i < numSlide; i++) {
        slideAll[i].style.display = "block";
      }
      slideAll[n - 1].style.display = "none" ;

      PrevBtn.addEventListener('click', function(n) {
        showSlide(slidePrev);
      });
      NextBtn.addEventListener('click', function() {
        showSlide(slideNext);
      });


    };
    showSlide(1);
  }
};

export default initImage;
