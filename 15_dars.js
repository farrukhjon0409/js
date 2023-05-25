let numberOfSeries = +prompt("Nechta serial ko'rdingiz?");
const seresDB ={
    count:numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    privat:false,
};
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

if(seresDB.count < 5){
    console.log("kam serial ko'ribsiz!");
} else if(seresDB.count > 5 && seresDB.count < 10) {
    console.log("klassik tomoshabin ekansiz");
} else if(seresDB.count >= 10) {
    console.log("searialchi zvezda ekansiz");
} else{
    console.log("error");
}
console.log(seresDB);