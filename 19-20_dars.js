"use strict";

//callback function

// function first(cb) {
//     setTimeout(() => {
//         console.log(1);
//         cb();
//     }, 100);
// }
// function second() {
//     //
//     console.log(2);
// }
// first(second);

// function edu(subject,callback) {
//     console.log(`I wanna teach ${subject}`);
//     callback();
// }
// function done() {
//     console.log("That is great");
// }
// edu("JavaScript", done);


// const theif = {
//     jacket:"black",
//     height: 1.75,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     }
// }
// console.log(theif.height);
// delete theif.jacket;
// console.log(theif);

// console.log(Object.keys(theif));
// console.log(Object.keys(theif).length);

// for(let key in theif) {
//     console.log(`Property ${key} has ${theif[key]}`);
// }
// for(let key in theif) {
//     if (typeof theif[key] == "object") {
//         for(let i in theif[key]){
//             console.log(`Property ${i} has ${theif[key][i]}`);
//         } 
//     } else {
//         console.log(`Property ${key} has ${theif[key]}`);
//     }
// }

// let count = 0;
// for(let key in theif) count++;
// console.log(count);

// const theif = {
//     jacket:"black",
//     height: 1.75,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
//     howOut: function() {
//         console.log("Fast with help doors");
//     },
// }
// theif.howOut();

// const hair = theif.colors.hair;
// const style = theif.colors.style;
// console.log(hair);
// console.log(style);

//disturubsiya
// const {hair,style} = theif.colors;
// console.log(hair);
// console.log(style);