"use strict";
//   26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//     • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//     • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//     • Write one version of this program that runs the if block and another that runs the else block.
// version 1 run with if statement.
const alien_color = "Green";
if (alien_color == "Green") {
    console.log("\n"), console.log("**** The Player Earned  5 Points ****");
}
else if (alien_color == "Yellow") {
    console.log("**** You Player Earned 10 Points ****");
}
else if (alien_color == "Red") {
    console.log("**** The Player Earned 15 Points ****");
}
else {
    console.log("Try Again to Get Points");
}
;
// version 2 run with else statement.
let alien_color2 = "Brown";
if (alien_color2 == "Green") {
    console.log("\n"), console.log("**** The Player Earned  5 Points ****");
}
else if (alien_color2 == "Yellow") {
    console.log("**** You Player Earned 10 Points ****");
}
else if (alien_color2 == "Red") {
    console.log("**** The Player Earned 15 Points ****");
}
else {
    console.log("\n"), console.log("Select Right Alien Color & Try Again To Get Points");
}
;
