/**
 * file: js.js
 * purpose: mangefrikanter og skabe elementer via createlement
 **/
console.log('JavaScript from js/js.js: up and running!');

let Many = function (howMany) {

    let h = document.body.clientHeight;
    let w = document.body.clientWidth;

    for (let i = 0; i < howMany; i++) {

        // create elements on the fly
        let newDiv = document.createElement("div");
        newDiv.classList.add("red");
        newDiv.style.left = Math.floor(Math.random() * w) + 'px';
        newDiv.style.top = Math.floor(Math.random() * h) + 'px';
        newDiv.style.transform = 'rotate(' +
            Math.floor(Math.random() * 360) +
            'deg)';

        scene.appendChild(newDiv);
        console.log('Many exec...'); // test
    }
}

Many(Math.floor(Math.random() + 108 ) + 8 );
