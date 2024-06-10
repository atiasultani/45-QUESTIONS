
/*    16. More Guests: 
          
          • You just found a bigger dinner table, so now more space is available. 
            Think of three more guests to invite to dinner.           --------------------- Done

          • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
            you found a bigger dinner table.                          --------------------- Done

          • Add one new guest to the beginning of your array.         --------------------- Done

          • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
                                                                      -------------------- Done 
          • Print a new set of invitation messages, one for each person in your list.
                                                                      -------------------- Done  */


let guest = ["Sara", "Zara", "Zahra"];

console.log("\n");

console.log(
  guest[0],
  " : i invite you to dinner today at  kababjees.Please join us ."
);
console.log(
  guest[1],
  " : i invite you to dinner today at  kababjees.Please join us ."
);
console.log(
  guest[2],
  " : i invite you to dinner today at  kababjees.Please join us ."
);
console.log("\n");
console.log(guest[0], " : she is not came due to some work");

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

