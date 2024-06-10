
// 29.	Favorite Fruit: Make a array of your favorite fruits, and then
//       write a series of independent if statements that check for certain fruits in your array.
//      • Make a array of your three favorite fruits and call it favorite_fruits.
//      • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//        If the fruit is in your array, the if block should print a statement, such as You really like bananas!.

let favorite_fruits:string[]=["Pomigarent","Papaya","Sweetapple" ];
console.log("\n");
if(favorite_fruits.includes("Pomigarent" )){console.log("  Fruit 'Pomigarent' is in array list.I really like it.")} 
else {console.log("  This fruit is not in array list")};

if (favorite_fruits.includes("Apple")){console.log("  This Fruit is not in array list.")}
else {console.log("  This fruit is not in array list")};

if(favorite_fruits.includes("Sweetapple")){console.log("  Fruit 'Sweetapple' is in array list.I really like it.")}
else {console.log("  This fruit is not in array list")};

if (favorite_fruits.includes("Banana")){console.log("  This Fruit is not in your array list.")}
else {console.log("  This fruit is not in array list")};

if(favorite_fruits.includes("Papaya")){console.log("  Fruit 'Papaya' is in array list.I really like it.")}
else {console.log("  This fruit is not in array list")};