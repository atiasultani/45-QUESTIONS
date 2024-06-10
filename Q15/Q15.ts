/*  15. Changing Guest List: You just heard that one of your guests can’t make the dinner, 
        so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

    a• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
        the name of the guest who can’t make it.

    b• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

    c• Print a second set of invitation messages, one for each person who is still in your list.
*/

let guest = ["sara", "zara", "zahra"];

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
console.log("\n");

let newList: string[] = ["sara", "zara", "zahra"];
newList[0] = "zarish";
for (let a = 0; a < newList.length; a++) {
  console.log(newList[a],
    ":i invite you to dinner today at  kababjees.Please join us ."
  );
}
