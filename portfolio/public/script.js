document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let index = 0;
  
    function showSlide() {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[index].style.display = "block";
    }
  
    function nextSlide() {
      index++;
      if (index >= slides.length) {
        index = 0;
      }
      showSlide();
    }
  
    function prevSlide() {
      index--;
      if (index < 0) {
        index = slides.length - 1;
      }
      showSlide();
    }
  
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
  
    showSlide();
  });
  