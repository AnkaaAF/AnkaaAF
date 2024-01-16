document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
  
    let currentIndex = 0;
  
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
  
    function updateSlider() {
      const transformValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + transformValue + ')';
    }
  });
  


// Wajib Number Only
$(document).ready(function () {
    $('#nohp').mask('0000000000000');
});