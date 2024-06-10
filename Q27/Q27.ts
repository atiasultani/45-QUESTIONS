// 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

const alien_color1:string = "Green";

//alien color is green

if (alien_color1 == "Green") {console.log("\n"),
    console.log("**** The Player Earned  5 Points ****")}
else if(alien_color1 == "Yellow"){ console.log("**** You Player Earned 10 Points ****") }
else if(alien_color1 == "Red"){ console.log("**** The Player Earned 15 Points ****") }
else{console.log("Try Again to Get Points")};

//alien color is yellow

let alien_color2:string="Yellow";

if (alien_color2 == "Green") {
    console.log("**** The Player Earned 5 Points ****")}
else if(alien_color2 == "Yellow"){ console.log("**** The Player Earned 10 Points ****") }
else if(alien_color2 == "Red"){ console.log("**** The Player Earned 15 Points ****") }
else{console.log("Try Again to Get Points")};

//alien color is red

let alien_color3:string="Red";

if (alien_color3 == "Green"){console.log("**** The Player Earned 5 Points ****")}
else if(alien_color3 == "Yellow"){ console.log("**** You Player Earned 10 Points ****") }
else if(alien_color3 == "Red"){ console.log("**** The Player Earned 15 Points ****") }
else{console.log("Try Again to Get Points")};