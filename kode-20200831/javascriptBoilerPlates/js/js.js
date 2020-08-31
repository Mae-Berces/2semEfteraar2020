/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');

document.write("<h1>Hej verden</h1>");
/**
 *JavaScript Byggekoldser
 **/


//gammeldags måde at skrive var på
// var er global
var magi = "Hokus poukus filiokus filihankat!";
var markup= "<strong>";
var markupX= "</stron>";

//mere moderne måde til var er
//let er inde i funktion
let citat = ' "Jylland mellem tvede have." ';

//hvis en værdie ikke ændres
const navn = "<br>H.C Anderesen ( 1885-1875)"

document.write(markup + citat + navn + markupX);

//js kan også regne 
let a =  2;
let b = 777;
//let c = "777"; er ikke et tal
let c = a * b;
console.log( c );

let d = c + 333;
console.log ( d );

//data typer: number,string,objekter

var cars = [
    "Saab", 
    "Volvo",
    "BMW",
    "Citroén",
    "Tesla",
    "Hyundai",
    "Renault",
    "Jensen",
    "Rover",
    "Jaguar",
];

let husk = [
    " Ost",
    " Benzin",
    " Tjek trafik inden vi køre",
];

//korte kodelinjer er lettere at forstå
document.write(
    "<p>"+ 
    husk[0]+
    "</p>"
);

//Loop...
/*
for (
let i = 0; ==========> variabel
i<3;==================> betingelse som stopper loopet når det er nået
i++)================> taller, ++ lægger en til værdien af i 
*/
document.write( "<ul>" );

//loop: while...
for (let i = 0; i< cars.length; i++){    document.write("<li class='orange'>" + cars[i] + "</li>");

}

document.write( "</ul>" );

/**
*Document Objekt Modellen
**/
//var element = document.getElementById("minAside");
//element.innerHTML = "<h1 class='orange'>Her er en overskrift</h1>";


let anders = document.getElementyById("minAside);
anders.innerHTML = "affdkfgknrg";
anders.style.color = "#fff";
anders.stule.backgroundColor = "blue";

// backgroundColor <====> i CSS skriver man background-color

var kort = [
"../"
                                      
];

//loop listen ud                                   
for let n=0; n <kort-length; n++){
    console.log("image scr='" + kort[n] + ">");
    anders.innerHTML += "image scr=" + kort [n] + "'>";
}
