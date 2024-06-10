// 17.Shrinking Guest List: You just found out that your new dinner table 
//    won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16.                                              ------------Done
//    Add a new line that prints a message saying that you can invite only two people for dinner.-------Done
// • Remove guests from your list one at a time until only two names remain in your list.  -------------Done
//    Each time you pop a name from your list, print a message to that person letting 
//    them know you’re sorry you can’t invite them to dinner.                               ------------Done
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
//                                                                                           -----------Done
//  • Remove the last two names from your list, so you have an empty list. Print your list to makes.
//                                                                                             ------------Done



/* Question no 17 Start */

// replace another guest which is not attend the party.

console.log("\n");
let newList:string[] = ["Sara", "Zara", "Zahra"];
newList[0] = "Zarish";
for (let a = 0; a < newList.length; a++) {
  console.log(newList[a],
    " :i invite you to dinner today at  kababjees.Please join us ."
  );
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
newList[5]=("Ahmed");


for (let a = 0; a < newList.length; a++) {
  console.log(newList[a],
    ":i invite you to dinner today at  kababjees.Please join us ."
  );
}

// remove friends

console.log("****************************************************************");
console.log("\n");
console.log("Sorry Friend I can't get large table for dinner");
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[5] , ": sorry i cant invite you at this time to dinner." );
newList.pop();
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[4] , ": sorry i cant invite you at this time to dinner." );
newList.pop();
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[3] , ": sorry i cant invite you at this time to dinner." );
newList.pop();
console.log("\n");
console.log(newList);
console.log("\n");
console.log(newList[2] , ": sorry i cant invite you at this time to dinner." );
newList.pop();
console.log("\n");
console.log(newList);

for (let a = 0; a < newList.length; a++) {
    console.log(newList[a],
      ":i invite you both to dinner today at  kababjees.Please join us ."
    );
};
console.log("****************************************************************");
newList.pop();
newList.pop();
console.log("\n");
console.log(newList);