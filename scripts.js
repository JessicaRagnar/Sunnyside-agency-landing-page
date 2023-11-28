// HAMBURGERMENU FOR MOBILE
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburgermenu');
    const menuList = document.querySelector('.menu-list');
  
    hamburgerIcon.addEventListener('click', function () {
      menuList.classList.toggle('show-menu');
    });
  
    // Close menu
    const navLinks = document.querySelectorAll('.nav-links');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuList.classList.remove('show-menu');
      });
    });
  });
// MOVING ARROW
  document.addEventListener('DOMContentLoaded', function () {
    const arrowDown = document.querySelector('.arrow-down');
    
    // Moving height
    const maxHeight = 20;
  
    let speed = 1;
    let direction = 1;
  
    setInterval(function () {
      let currentPosition = parseInt(arrowDown.style.paddingTop) || 0;
      currentPosition += speed * direction;
  
      if (currentPosition >= maxHeight || currentPosition <= 0) {
        direction *= -1;
      }

      arrowDown.style.paddingTop = currentPosition + 'px';
    }, 20);
  });
  
// CONTACT-FORM
  document.addEventListener('DOMContentLoaded', function () {
    const buttonContact = document.querySelector('.buttonContact');
    const contactFormContainer = document.getElementById('contactFormContainer');
    const closeBtn = document.getElementById('closeBtn');
  
    buttonContact.addEventListener('click', function (event) {
      event.preventDefault();
      contactFormContainer.style.display = 'flex';
    });
  
    closeBtn.addEventListener('click', function () {
      contactFormContainer.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === contactFormContainer) {
        contactFormContainer.style.display = 'none';
      }
    });
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Form submitted!');
      contactFormContainer.style.display = 'none';
    });
  });

// CAROUSEL-GALLERY
  let currentIndex = 0;

function changeSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const slideWidth = slides[0].clientWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const newTransformValue = -currentIndex * slideWidth;
  track.style.transform = `translateX(${newTransformValue}px)`;
}
