"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() 
//      that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//      Call show_magicians() to see that the list has actually been modified.
let magician = ["Magician1", "Magician2", "Magician3", "Magician4"];
function show_magicians(shows) {
    magician.forEach(element => { console.log(element); });
}
show_magicians(magician);
console.log("-------------------------------------");
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The Great ' + magicianArray[i];
        console.log(magician[i]);
    }
    ;
}
;
make_great(magician);
