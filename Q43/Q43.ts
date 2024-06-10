// 43.	Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() 
//     with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//     return the new array and store it in a separate array. Call show_magicians() with each array 
//     to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician:string[]=["Magician1","Magician2","Magician3","Magician4"];


function show_magicians(shows:string[]){
    magician.forEach(element=>{ console.log(element)})
};

function make_great(magicianArray:string[]){
    for(let i=0 ; i<magicianArray.length;i++){
        magicianArray[i] = 'The Great ' + magicianArray[i];
        console.log(magician[i])
    };};
    

function copyArry(array:string[]){
    return [...array]
};

const copyMagicianArray = copyArry(magician)


console.log("\n");
console.log("----------------------------------")
console.log(" Orignal Array of Magician");
console.log("----------------------------------")
show_magicians(copyMagicianArray);
console.log("----------------------------------")
console.log(" Modified Array of Magician");
console.log("----------------------------------")

make_great(magician);