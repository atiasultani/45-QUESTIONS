"use strict";
// 41.	Magicians: Make a array of magician’s names.
//      Pass the array to a function called show_magicians(), 
//      which prints the name of each magician in the array.
let magician = ["Magician1", "Magician2", "Magician3"];
function show_magicians(shows) {
    magician.forEach(element => { console.log(element); });
}
show_magicians(magician);
