"use strict";


const seresDB = {
    count: 0,
    series:{},
    actors:{},
    genres:[],
    private:false,
    start: function() {
        seresDB.count= +prompt("Nechta serial ko'rdingiz?", "");

        while (seresDB.count == "" ||
        seresDB.count == null || 
        isNaN(seresDB.count)
        ) { seresDB.count = +prompt("Nechta serial ko'rdingiz?", "");
        }
    },
    rememberMySeries: function() {
        for(let i=0; i<2; i++){
            const a = prompt("Oxirgi ko'rgan serialingiz?", ""),
            b = prompt("Nechchi baho berasiz?", "");
            if(a != null && b != null && a != "" && b != "") {
                seresDB.series[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectLevelSeres: function() {
        if(seresDB.count < 5){
            console.log("kam serial ko'ribsiz!");
        } else if(seresDB.count > 5 && seresDB.count < 10) {
            console.log("klassik tomoshabin ekansiz");
        } else if(seresDB.count >= 10) {
            console.log("searialchi zvezda ekansiz");
        } else{
            console.log("error");
        }
    },
    showDB: function() {
        if(!seresDB.private){
            console.log(seresDB);
        } 
    },
    visibleDB: function() {
        if(seresDB.private) {
            seresDB.private = false;
        } else {
            seresDB.private = true;
        }
    },
    writeGenres: function() {
        // for(let i=1; i<=3; i++) {
        //     const genre = prompt(`yaxshi ko'rgan janringiz ${i}`, "");
        //     if (genre === "" || genre === null) {
        //         console.log("Siz noto'gri malumot kiritdingiz!");
        //         i--;
        //     } else {
        //         seresDB.genres[i-1] = genre;
        //     }
        // }

        let genres =prompt(
            "yaxshi korgan serialingizni vergul yordamida yozoong!"
            ).toLowerCase();
        console.log(genres);
        if (genres === "" || genres === null) {
            console.log("Siz noto'gri malumot kiritdingiz!");
            i--;
        } else {
            seresDB.genres = genres.split(",");
            seresDB.genres.sort();
        }

        seresDB.genres.forEach((item,index) => {
            console.log(`Yaxshi korgan janringiz ${index+1} - nomi ${item}`);
        })
    },

};
