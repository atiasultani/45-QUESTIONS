"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. 
//  Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, 
//  and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let country1 = "Pakistan";
let country2 = "India";
console.log("\n");
console.log(" 1) Tests for equality and inequality with strings");
console.log("Equality : ", country1 == "Pakistan");
console.log("Inequality : ", country2 == "Pakistan");
console.log("-----------------------------------------------------");
let countryName = "PAKISTAN".toLowerCase();
console.log("\n");
console.log(" 2) Tests using the lower case function");
console.log("check is country name convert into lower case ? : ", countryName == "pakistan");
console.log("-----------------------------------------------------");
let num1 = 5, num2 = 9, num3 = 5, num4 = 13;
console.log("\n");
console.log(" 3) Numerical tests involving equality and inequality.greater than and less than. greater than or equal to and less than or equal to");
console.log("Equality , num1 = 5 & num3 = 5 : ", num1 == num3);
console.log("Inequality , num2 = 9 & num3 = 5 : ", num2 !== num3);
console.log("num4 = 13 greater than  num3 = 5 : ", num4 > num3);
console.log("num2 = 9 less than num3 = 5 : ", num2 < num3);
console.log("num2 = 9 Greater than or equal to num3 = 5 : ", num2 >= num3);
console.log("num1 = 5 less than or equal to num4 = 13 : ", num1 <= num4);
console.log("-----------------------------------------------------");
console.log("\n");
console.log(' 4) Tests using " && " and " || " operators');
console.log("and && Operator: ", true && true == true);
console.log(" Or || Operator: ", true || false == false);
console.log("------------------------------------------------------------");
console.log("Test whether an item is in a array");
let toysList = ["piano", "soft toys", "mini cars"];
console.log("soft toys is in array list? :", toysList.includes("soft toys"));
console.log("------------------------------------------------------------");
console.log("Test whether an item is not in a array");
let toysList2 = ["piano", "soft toys", "mini cars"];
console.log("video games is in array list? :", toysList.includes("video games"));
console.log("------------------------------------------------------------");
