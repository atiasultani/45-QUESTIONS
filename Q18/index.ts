// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.-----------------------Done
// • Print your array in its original order.                                          -----------------------Done  
// • Print your array in alphabetical order without modifying the actual list.        -----------------------Done  
// • Show that your array is still in its original order by printing it.              -----------------------Done
// • Print your array in reverse alphabetical order without changing the order of the original list.---------Done
// • Show that your array is still in its original order by printing it again.        -----------------------Done  
// • Reverse the order of your list. Print the array to show that its order has changed.---------------------Done
// • Reverse the order of your list again.                                               
//   Print the list to show it’s back to its original order.                            ---------------------Done
// • Sort your array so it’s stored in alphabetical order.
//   Print the array to show that its order has been changed.                           ---------------------Done
// • Sort to change your array so it’s stored in reverse alphabetical order. 
//   Print the list to show that its order has changed.                                 ---------------------Done

const placesName:string[]=["Kashmir","Makkah","Japan","Madina","Istanbol"];
console.log("Five Place Names that i will visit",placesName);

console.log("*****************************************************************");

console.log("Place Names in Alphabatucal Order ",[...placesName].sort());
console.log("Place names as in orignal list without alphabatical", placesName);

console.log("*****************************************************************");

console.log("Reverse Alphabatucal Order ",[...placesName].sort().reverse());
console.log(placesName);

console.log("*****************************************************************");

console.log("Reverse Orignal Place Names List ",placesName.reverse());

console.log("*****************************************************************");

console.log("Sort arry in Alphabatucal Order ",placesName.sort());
console.log(placesName);

console.log("*****************************************************************");

console.log("Sort arry in reverse Alphabatucal Order ",placesName.reverse());
console.log(placesName);
 