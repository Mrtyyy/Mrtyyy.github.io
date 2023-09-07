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


function checkVisibility_right() {
    var elements = document.querySelectorAll('.ExDie-text, .ExDie-circle, .InLö-circle, .InLö-text, .LaPa-circle, .LaPa-text');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var bounding = element.getBoundingClientRect();
  
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        element.classList.add('visible-right');
      }
    }
  }


  function checkVisibility_left() {
    var elements = document.querySelectorAll('.header, .vorwort, .ProBe-circle, .ProBe-text, .VuI-circle, .VuI-text');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var bounding = element.getBoundingClientRect();
  
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        element.classList.add('visible-left');
      }
    }
  }
  
  // Überprüfe Sichtbarkeit beim Laden der Seite
  window.addEventListener('load', checkVisibility_right);
  window.addEventListener('load', checkVisibility_left);
  document.addEventListener('scroll', checkVisibility_right);
  document.addEventListener('scroll', checkVisibility_left);