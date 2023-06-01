"use strict";

// const btns = document.querySelectorAll("button");
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));

// btns[1].classList.add("blue","break");
// btns[0].classList.remove("blue");
// btns[0].classList.toggle("blue");

// if(btns[0].classList.contains("blue")) {
//     console.log("bor");
// }

// const a = btns[0].classList.contains("blue");
// console.log(a);

// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle("red")
// });

// 36_dars

const wrapper = document.querySelector(".btn-block");
const btns = document.querySelectorAll("button");

// wrapper.addEventListener('click', () => {
//     console.log("click");
// });

// wrapper.addEventListener('click', (event) => {
//     console.dir(event.target);
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && (event.target.tagName === 'BUTTON')) {
//         console.log("btn click");
//     }
// });

btns[0].addEventListener("click", () => {
    btns[1].classList.toggle("red");
});

wrapper.addEventListener('click', (event) => {
    if (event.target && (event.target.classList.contains("red"))) {
        console.log("btn click");
    }
});

btns.forEach((item) => {
    item.addEventListener('click', () => {
        console.log("clicked");
    });
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);



