"use strict";
// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.                            ---------------done    
// • Make another list of five usernames called new_users.                                 ----------------done 
//   Make sure one or two of the new usernames are also in the current_users list.         ----------------done 
// • Loop through the new_users list to see if each new username has already been used. 
//   If it has, print a message that the person will need to enter a new username. 
//   If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["user1", "user2", "user3", "user4", "user5", "Shams", "Abroo"];
let new_users = ["Aroba", "Arzo", "Shams", "Bazila", "Abroo"];
for (let new_users1 of new_users) {
    const lowercase_new_users = new_users1.toLocaleLowerCase();
    let a = current_users.map(user => user.toLocaleLowerCase()).includes(lowercase_new_users);
    if (a) {
        console.log(`the person ${new_users1} is not available.You will need to enter a new username.`);
    }
    else {
        console.log(`the username ${new_users1} is available.`);
    }
}
