document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
  
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
  
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
  
      slides[slideIndex].style.display = 'block';
      currentSlide = slideIndex;
    }
  
    function changeSlide(n) {
      showSlide(currentSlide + n);
    }
  
    document.querySelector('.prev').addEventListener('click', function() {
      changeSlide(-1);
    });
  
    document.querySelector('.next').addEventListener('click', function() {
      changeSlide(1);
    });
  
    showSlide(currentSlide);
  });
  
