const numberOfSeries = prompt("Nechta serial ko'rdingiz?");
const seresDB ={
    count:numberOfSeries,
    series:{},
    actors:{},
    genres:[],
    privat:false,
};
const a = prompt("Oxirgi ko'rgan serialingiz?"),
b = prompt("Nechchi baho berasiz?"),
c = prompt("Oxirgi ko'rgan serialingiz?"),
d = prompt("Nechchi baho berasiz?");
seresDB.series[a] = b;
seresDB.series[c] = d;
console.log(seresDB);