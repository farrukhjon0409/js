"use strict";
let numberOfSeries;
function startApp() {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?");

    while (numberOfSeries == "" ||
        numberOfSeries == null || isNaN(numberOfSeries)) {
        numberOfSeries = +prompt("Nechta serial ko'rdingiz?");
    }
}
startApp();

const seresDB ={
    count:numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    privat:false,
};
function rememberMySeries() {
    for(let i=0; i<2; i++){
        const a = prompt("Oxirgi ko'rgan serialingiz?"),
        b = prompt("Nechchi baho berasiz?");
        if(a != null && b != null && a != "" && b != "") {
            seresDB.series[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}
rememberMySeries();

function detectLevelSeres() {
    if(seresDB.count < 5){
        console.log("kam serial ko'ribsiz!");
    } else if(seresDB.count > 5 && seresDB.count < 10) {
        console.log("klassik tomoshabin ekansiz");
    } else if(seresDB.count >= 10) {
        console.log("searialchi zvezda ekansiz");
    } else{
        console.log("error");
    }
}
detectLevelSeres();
 
function showDB() {
    if(!seresDB.privat){
        console.log(seresDB);
    } else {
        console.log("error");
    }
}
showDB();

function writeGenres(){
    for(let i=1; i<=3; i++) {
        seresDB.genres[i-1] = prompt(`yaxshi ko'rgan janringiz ${i}`);
        
    }
}
writeGenres();


