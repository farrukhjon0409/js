

var numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '');

var seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

for (var i = 0; i < 2; i++) {
  var a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt("Nechi baxo berasiz?");

  if (a != null && b != null && a != '' && b != '') {
    seriesDB.series[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (seriesDB.count < 5) {
  console.log("Kam serial ko'ripsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log("Siz classik tamoshabin ekansiz");
} else if (seriesDB.count >= 10) {
  console.log("Siz serialchi zvezda ekansiz");
} else {
  console.log("Error");
}

console.log(seriesDB);
