// 35.	Animals: Think of at least three different animals that have a common characteristic.
//     Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//
//     • Modify your program to print a statement about each animal, such as A dog would make a great pet.
//     • Add a line at the end of your program stating what these animals have in common. You could print a sentence
//       such as Any of these animals would make a great pet!

let animals: string[] = ["Goat", "Cow", "Cat"];
for (let i = 0; i <= animals.length; i++) {
  if (animals[i] === "Goat") {
    console.log(`${animals[i]} : A Goat is great pet `);
  } else if (animals[i] === "Cow") {
    console.log(
      `${animals[i]} : A Cow could make pet.its economically help us to daily expenses of milk`
    );
  } else if (animals[i] === "Cat") {
    console.log(`${animals[i]} : A Cat is usually common pet `);
  }
}
console.log("\n");
console.log(
  `These animals ${animals} have some common characteristics.
  ${"\n"}Some animals are good friend or pets of humanbing .
  ${"\n"}We don't understand pets languages but they easly understand our love or hate emotion about them .
  ${"\n"}So we should takecare such animals we want them to make our pets.
  ${"\n"}All Livingthings Understand Language of Care,Love and Emotions, Animals and Plants too. `
);
