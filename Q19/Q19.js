"use strict";
// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//      print a message indicating the number of people you are inviting to dinner.
/* Question no 17 Start */
// replace another guest which is not attend the party.
console.log("\n");
let newList = ["Sara", "Zara", "Zahra"];
newList[0] = "Zarish";
for (let a = 0; a < newList.length; a++) {
    console.log(newList[a], " :i invite you to dinner today at  kababjees.Please join us .");
}
// tell the friends to get large table of dinner so invite more friends.
console.log("\n");
console.log("Hello Friends ! i found a bigger dinner table so I invite more Friends ");
console.log("\n");
console.log("Final list Of Invetation You All Are Invited");
console.log("*********************************************");
console.log("\n");
newList.unshift('Raza');
newList.push("Amber");
newList[5] = ("Ahmed");
for (let a = 0; a < newList.length; a++) {
    console.log(newList[a], ":i invite you to dinner today at  kababjees.Please join us .");
}
// remove friends
console.log("****************************************************************");
console.log("\n");
console.log("Sorry Friend I can't get large table for dinner");
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[5], ": sorry i cant invite you at this time to dinner.");
newList.pop();
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[4], ": sorry i cant invite you at this time to dinner.");
newList.pop();
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[3], ": sorry i cant invite you at this time to dinner.");
newList.pop();
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[2], ": sorry i cant invite you at this time to dinner.");
newList.pop();
console.log("\n");
console.log(newList);
for (let a = 0; a < newList.length; a++) {
    console.log(newList[a], ":i invite you both to dinner today at  kababjees.Please join us .");
}
;
console.log("****************************************************************");
newList.pop();
newList.pop();
console.log("\n");
console.log(newList);
console.log("\n");
console.log("The number of people are inviting to dinner.", newList.length);
