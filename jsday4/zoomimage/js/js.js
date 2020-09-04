/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// get the click on the div and fire off animaition
document.getElementById("zoom").onmousemove = function() {
    console.log('nogen klikker på mig');
  addAnimation();
};

/* now the background will move */
function addAnimation() {
  // moveIt is a css class
  // toggle: noget skifter fra en til en anden og tilbage igen
  document.getElementById("zoom").classList.toggle("moveIt");
}