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


// Warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Alle Kacheln auswählen
    var kacheln = document.querySelectorAll(".kachel");
  
    // Eventlistener für Klick auf Kachel hinzufügen
    kacheln.forEach(function(kachel) {
      var circle = kachel.querySelector(".kachel-circle");
      var inhalt = kachel.querySelector(".kachel-inhalt");
  
      circle.addEventListener("click", function() {
        if (inhalt.classList.contains("angezeigt")) {
          inhalt.classList.remove("angezeigt");
        } else {
          inhalt.classList.add("angezeigt");
        }
      });
    });
  });


const rotateElement1 = document.getElementById('kachel1-expand');
let rotationEnabled1 = true;

rotateElement1.addEventListener('click', function () {
    if (rotationEnabled1) {
    rotateElement1.style.transition = 'transform 0.75s';
    rotateElement1.style.transform = 'rotate(45deg)';
    rotationEnabled1 = false; }

    else {
      rotateElement1.style.transition = 'transform 0.75s';
      rotateElement1.style.transform = 'rotate(0)';
      rotationEnabled1 = true;
    }
});


const rotateElement2 = document.getElementById('kachel2-expand');
let rotationEnabled2 = true;

rotateElement2.addEventListener('click', function () {
    if (rotationEnabled2) {
    rotateElement2.style.transition = 'transform 0.75s';
    rotateElement2.style.transform = 'rotate(45deg)';
    rotationEnabled2 = false; }

    else {
      rotateElement2.style.transition = 'transform 0.75s';
      rotateElement2.style.transform = 'rotate(0)';
      rotationEnabled2 = true;
    }
});


const rotateElement3 = document.getElementById('kachel3-expand');
let rotationEnabled3 = true;

rotateElement3.addEventListener('click', function () {
    if (rotationEnabled3) {
    rotateElement3.style.transition = 'transform 0.75s';
    rotateElement3.style.transform = 'rotate(45deg)';
    rotationEnabled3 = false; }

    else {
      rotateElement3.style.transition = 'transform 0.75s';
      rotateElement3.style.transform = 'rotate(0)';
      rotationEnabled3 = true;
    }
});


const rotateElement4 = document.getElementById('kachel4-expand');
let rotationEnabled4 = true;

rotateElement4.addEventListener('click', function () {
    if (rotationEnabled4) {
    rotateElement4.style.transition = 'transform 0.75s';
    rotateElement4.style.transform = 'rotate(45deg)';
    rotationEnabled4 = false; }

    else {
      rotateElement4.style.transition = 'transform 0.75s';
      rotateElement4.style.transform = 'rotate(0)';
      rotationEnabled4 = true;
    }
});


const rotateElement5 = document.getElementById('kachel5-expand');
let rotationEnabled5 = true;

rotateElement5.addEventListener('click', function () {
    if (rotationEnabled5) {
    rotateElement5.style.transition = 'transform 0.75s';
    rotateElement5.style.transform = 'rotate(45deg)';
    rotationEnabled5 = false; }

    else {
      rotateElement5.style.transition = 'transform 0.75s';
      rotateElement5.style.transform = 'rotate(0)';
      rotationEnabled5 = true;
    }
});


const rotateElement6 = document.getElementById('kachel6-expand');
let rotationEnabled6 = true;

rotateElement6.addEventListener('click', function () {
    if (rotationEnabled6) {
    rotateElement6.style.transition = 'transform 0.75s';
    rotateElement6.style.transform = 'rotate(45deg)';
    rotationEnabled6 = false; }

    else {
      rotateElement6.style.transition = 'transform 0.75s';
      rotateElement6.style.transform = 'rotate(0)';
      rotationEnabled6 = true;
    }
});


const rotateElement7 = document.getElementById('kachel7-expand');
let rotationEnabled7 = true;

rotateElement7.addEventListener('click', function () {
    if (rotationEnabled7) {
    rotateElement7.style.transition = 'transform 0.75s';
    rotateElement7.style.transform = 'rotate(45deg)';
    rotationEnabled7 = false; }

    else {
      rotateElement7.style.transition = 'transform 0.75s';
      rotateElement7.style.transform = 'rotate(0)';
      rotationEnabled7 = true;
    }
});


const rotateElement8 = document.getElementById('kachel8-expand');
let rotationEnabled8 = true;

rotateElement8.addEventListener('click', function () {
    if (rotationEnabled8) {
    rotateElement8.style.transition = 'transform 0.75s';
    rotateElement8.style.transform = 'rotate(45deg)';
    rotationEnabled8 = false; }

    else {
      rotateElement8.style.transition = 'transform 0.75s';
      rotateElement8.style.transform = 'rotate(0)';
      rotationEnabled8 = true;
    }
});


const rotateElement9 = document.getElementById('kachel9-expand');
let rotationEnabled9 = true;

rotateElement9.addEventListener('click', function () {
    if (rotationEnabled9) {
    rotateElement9.style.transition = 'transform 0.75s';
    rotateElement9.style.transform = 'rotate(45deg)';
    rotationEnabled9 = false; }

    else {
      rotateElement9.style.transition = 'transform 0.75s';
      rotateElement9.style.transform = 'rotate(0)';
      rotationEnabled9 = true;
    }
});


const rotateElement10 = document.getElementById('kachel10-expand');
let rotationEnabled10 = true;

rotateElement10.addEventListener('click', function () {
    if (rotationEnabled10) {
    rotateElement10.style.transition = 'transform 0.75s';
    rotateElement10.style.transform = 'rotate(45deg)';
    rotationEnabled10 = false; }

    else {
      rotateElement10.style.transition = 'transform 0.75s';
      rotateElement10.style.transform = 'rotate(0)';
      rotationEnabled10 = true;
    }
});


const rotateElement11 = document.getElementById('kachel11-expand');
let rotationEnabled11 = true;

rotateElement11.addEventListener('click', function () {
    if (rotationEnabled11) {
    rotateElement11.style.transition = 'transform 0.75s';
    rotateElement11.style.transform = 'rotate(45deg)';
    rotationEnabled11 = false; }

    else {
      rotateElement11.style.transition = 'transform 0.75s';
      rotateElement11.style.transform = 'rotate(0)';
      rotationEnabled11 = true;
    }
});


const rotateElement12 = document.getElementById('kachel12-expand');
let rotationEnabled12 = true;

rotateElement12.addEventListener('click', function () {
    if (rotationEnabled12) {
    rotateElement12.style.transition = 'transform 0.75s';
    rotateElement12.style.transform = 'rotate(45deg)';
    rotationEnabled12 = false; }

    else {
      rotateElement12.style.transition = 'transform 0.75s';
      rotateElement12.style.transform = 'rotate(0)';
      rotationEnabled12 = true;
    }
});



function checkVisibility_down() {
  var elements = document.querySelectorAll('.title, .kachel1, .kachel2, .kachel3, .kachel4, .kachel5, .kachel6, .kachel7, .kachel8, .kachel9, .kachel10, .kachel11, .kachel12, .head, .beratungen');

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var bounding = element.getBoundingClientRect();

    if (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      element.classList.add('visible-down');
    }
  }
}


// Überprüfe Sichtbarkeit beim Laden der Seite
window.addEventListener('load', checkVisibility_down);
document.addEventListener('scroll', checkVisibility_down);