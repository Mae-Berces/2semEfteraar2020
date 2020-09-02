/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

// function that will fire after click


let runAnimation = function(){
  square.classList.add("animate");
  setTimeout(clearClass, 4000);
}

// element.addEventListener("click", myAddClassFunction);
square.addEventListener("click", runAnimation);

let clearClass = function(){
  square.classList.remove("animate");
}

// setTimeout(myFunction, 3000); 
// 

