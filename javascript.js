let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav'),
	 slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

var menuItems = document.getElementsByTagName('a');
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
  });
}

var slideIndex = 0;
var slides = document.getElementById('slideshow-container').querySelectorAll('.slide');
var slideIndicators = document.getElementById('slide-indicators');
var slideshowTimer;

function showSlide(index) {
  if (index === slideIndex) {
    return; // Do nothing if the same slide is clicked
  }

  var currentSlide = slides[slideIndex];
  var nextSlide = slides[index];

  if (index < slideIndex) {
    // Slide fliegt von links ein und aktuelle Slide fliegt nach rechts
    currentSlide.classList.add('leave');
    nextSlide.classList.add('enter');
  } else {
    // Slide fliegt von rechts ein und aktuelle Slide fliegt nach links
    currentSlide.classList.add('previous-leave');
    nextSlide.classList.add('previous-enter');
  }

  setTimeout(function () {
    currentSlide.classList.remove('active', 'previous-leave', 'leave');
    nextSlide.classList.add('active');
    nextSlide.classList.remove('previous-enter', 'enter');
  }, 500);

  slideIndex = index;

  updateSlideIndicators();
  resetTimer();
}

function updateSlideIndicators() {
  slideIndicators.innerHTML = '';
  for (var i = 0; i < slides.length; i++) {
    var indicator = document.createElement('div');
    indicator.classList.add('slide-indicator');
    if (i === slideIndex) {
      indicator.classList.add('active');
    }
    indicator.setAttribute('data-slide-index', i);
    indicator.addEventListener('click', function () {
      var index = parseInt(this.getAttribute('data-slide-index'));
      showSlide(index);
    });
    slideIndicators.appendChild(indicator);
  }
}

function resetTimer() {
  clearInterval(slideshowTimer);
  slideshowTimer = setInterval(function () {
    showSlide((slideIndex + 1) % slides.length); // Verwende Modulo-Operation, um den Index zu begrenzen
  }, 10000);
}

updateSlideIndicators(); // Einmaliger Aufruf, um die Slide-Indikatoren sofort anzuzeigen

resetTimer();

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    showSlide((slideIndex - 1 + slides.length) % slides.length); // Verwende Modulo-Operation, um den Index zu begrenzen
  } else if (event.key === 'ArrowRight') {
    showSlide((slideIndex + 1) % slides.length); // Verwende Modulo-Operation, um den Index zu begrenzen
  }
});

const rotateElement = document.getElementById('§');
let rotationEnabled = true;

rotateElement.addEventListener('click', function () {
  if (rotationEnabled) {
    rotateElement.style.transition = 'transform 1s';
    rotateElement.style.transform = 'rotate(360deg)';
    rotationEnabled = false;

    setTimeout(function () {
      rotateElement.style.transition = 'transform 0s';
      rotateElement.style.transform = '';
      rotationEnabled = true;
    }, 1000);
  }
});

