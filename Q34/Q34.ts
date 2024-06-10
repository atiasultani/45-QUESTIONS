
// 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//   and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing
//   just the name of the pizza. For each pizza you should have one line of output containing 
//   a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, 
//   that states how much you like pizza. The output should consist of three or
//   more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

let Pizzas:any[]=["Creamy Kabab Pizza" , "Crown Pizza" , "Creamy Max Pizza"];
for(let i=0 ; i<=Pizzas.length ; i++){
    if(Pizzas[i] === "Creamy Kabab Pizza"){ console.log(`I like ${Pizzas[i]}` )}
    else if(Pizzas[i] === "Crown Pizza"){ console.log(`I like ${Pizzas[i]}` )}
    else if(Pizzas[i] === "Creamy Max Pizza"){ console.log(`I like ${Pizzas[i]}` )}
};
console.log('\n');
console.log(`Pizza is such a delicious meal to eat every time, whenever we are hungry.${"\n"}I love some flavour at pizza max its such a good and yummy teast .${'\n'}I am also make that types of pizzas at home too .${'\n'}I really Love pizza too much ! `)
