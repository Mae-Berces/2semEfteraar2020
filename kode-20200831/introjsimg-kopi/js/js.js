/**
* file: js.js
* purpose: interactivity
**/

/**
* Document Objekt Modellen
**/

// tilføj html
//var element = document.getElementById("minAside");
//element.innerHTML = "<h1 class='orange'>Her er en overskrift</h1>";

let anders = document.getElementById("minAside");
//anders.innerHTML = "adfadfdasfd";
anders.style.color = "#fff";

//anders.style.backgroundColor = "blue";

// backgroundColor <====> i CSS skriver man background-color

var kort = [
"../images/efterår.jpeg", 
"../images/blade.jpeg",
"../images/blade2.jpeg"
];

// loope listen ud
for (let n=0; n < kort.length; n++){
console.log( "<img src='" + kort[n] + "'>");
anders.innerHTML += "<img src='" + kort[n] + "'>";
}