"use strict";

//callback function

function first(cb) {
    setTimeout(() => {
        console.log(1);
        cb();
    }, 100);
}
function second() {
    //
    console.log(2);
}
first(second);
