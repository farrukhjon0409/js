"use strict";   // dinamic typing

// to string
// console.log(typeof String(45));

// console.log(typeof ("farrukh + 0409"));

// const youtubeChannel = 1234;
// console.log(typeof ("youtube.com/channel/" + youtubeChannel));

//to number
// console.log(typeof Number("2314"));

// console.log(typeof +"2435");

// console.log(typeof parseInt("1324"));

//to boolean
//  0, "", null, underfined, NaN har doim false bo'ladi

// console.log(typeof Boolean("234"));

// console.log(typeof !!("234"));


//dom bn ishlash
// old way

// const box = document.getElementById("box");
// // console.log(box);

// const buttons = document.getElementsByTagName('button')[0];
// // console.log(buttons);

// const circles = document.getElementsByClassName("circle");
// // console.log(circles);

// const wrapper = document.querySelector(".wrapper");
// // console.log(wrapper);

// const hearts = document.querySelectorAll(".heart");
// // console.log(hearts);

// hearts.forEach((item) => {
//     // console.log(item);
// });


//metodlar bilan ishlash. DOM

const box = document.querySelector("#box");
const buttons = document.querySelectorAll("button");
const circles = document.querySelectorAll(".circle");
const circle = document.querySelector(".circle");
const hearts = document.querySelectorAll('.heart')
const circleWrapper = document.querySelector('.circle__wrapper')


// box.style.backgroundColor = "red";
// box.style.height = "100px";
// box.style.width = "100px";

box.style.cssText = "background-color: red; width: 100px; height: 100px";

buttons[0].style.width = "100px";
circles[1].style.backgroundColor = "yellow";
circle.style.backgroundColor = "green"

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'green'
// }

// hearts.forEach((item) => {
//   item.style.backgroundColor = 'gray'
// })

const btn = document.createElement('button')
// const text = document.createTextNode('I am text')

document.body.append(btn)

const myCircle = document.createElement('div')

myCircle.classList.add('circle')

// circleWrapper.append(myCircle)
// circleWrapper.before(myCircle)
// circleWrapper.after(myCircle)
// circles[0].after(myCircle)
// circles[1].remove()
// circles[1].replaceWith(myCircle)
// circleWrapper.append(myCircle)
// myCircle.innerHTML = '<pre>E</pre>'
// myCircle.textContent = 'E'
// circleWrapper.insertAdjacentHTML('beforeend', '<pre>E</pre>')



