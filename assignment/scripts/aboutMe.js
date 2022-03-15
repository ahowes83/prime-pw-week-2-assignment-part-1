// REQUIRED FEATURES:
let firstName = 'Andrew';
// 1 - Create a variable called `firstName` and assign it the value of your first name
let lastName = 'Howes';
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let fullName = firstName + ' ' + lastName;
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
console.log(fullName);
// 4 - Console log the value of `fullName`
let luckyNumber = 1;
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
console.log('My name is ' + fullName + ', and I think ' + luckyNumber + ' is a winner!');
// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.
let adventurous = true;
// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let food = 'tacos';
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let pets = 1;
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let friendsPets = 0;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
pets += 2;
// 11 - Add two pets to your `pets` variable
const allowedPets = 2;
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
if ( adventurous === true ) {
  console.log('Adventures are great!');
} else {
  console.log('How about we stay home?');
}
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"

if ( luckyNumber === 2 && adventurous === true ) {
  console.log('Roll the dice');
}
// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if ( pets < allowedPets ) {
  console.log('I can have more pets!');
} else if ( pets === allowedPets ) {
  console.log ('I have enough pets');
} else {
  console.log('Oh no, I have too many pets');
}
// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

// STRETCH GOALS:
let mostPets = 0;

if ( pets >= friendsPets ) {
  mostPets = pets;
} else {
  mostPets = friendsPets;
}
console.log(mostPets);
// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

switch(luckyNumber) {
  case 1:
    console.log('First is the worst');
    break;
  case 2:
    console.log('Second is the best');
    break;
  case 3:
    console.log('Third is the one with the polka dot dress');
    break;
  default:
    console.log('Luck is what happens when preparation meets opportunity');
}
// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!


let logMessage = adventurous ? 'Adventures are great!' : 'How about we stay home?';

console.log(logMessage);
// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
