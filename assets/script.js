// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// // You can store the generatedPassword as a string and concat each character OR
// // as an array and push each character, then join once you have enough characters
let charOptions = [];
let generatedPassword = "";

// Function to generate password with user input
function generatePassword() {
  //   // Prompt for password length
  //   // At least 8 characters, no more than 128 characters
  //   // Conditional to check that the number that was entered is in range
  //   // If the user's input is out of range, either return out of the function or call the function again
  numOfCharacters = prompt(
    "How many characters do you want? Choose between 8-128 characters"
  );

  if (numOfCharacters < 8 || numOfCharacters > 128) {
    return alert("Please choose a valid number");
  } else if (isNaN(numOfCharacters)) {
    numOfCharacters = prompt("Please enter a valid number");
  } else {
    alert(`Your password will be ${numOfCharacters} characters long.`);
  }

  // Confirm which character sets to use
  Lowercase = confirm("Do you want lowercase?");
  Lowercase
    ? alert("Your password will have lowercase.")
    : alert("Your password will NOT have lowercase.");

  Uppercase = confirm("Do you want uppercase?");
  Uppercase
    ? alert("Your password will have uppercase.")
    : alert("Your password will NOT have uppercase.");

  Numbers = confirm("Do you want to use numbers?");
  Numbers
    ? alert("Your password will have numbers.")
    : alert("Your password will NOT have numbers.");

  Specials = confirm("Do you want special characters?");
  Specials
    ? alert("Your password will have special characters.")
    : alert("Your password will NOT have special characters.");

  // If the user answers false for all, either return out of the function or call the function again
  if (
    Lowercase === false &&
    Uppercase === false &&
    Numbers === false &&
    Specials === false
  ) {
    return "Please select at least one character";
  }

  if (Lowercase) {
    charOptions = charOptions.concat(lowerCasedCharacters);
  }
  if (Uppercase) {
    charOptions = charOptions.concat(upperCasedCharacters);
  }
  if (Numbers) {
    charOptions = charOptions.concat(numericCharacters);
  }
  if (Specials) {
    charOptions = charOptions.concat(specialCharacters);
  }

  // Once they select a character set:
  // Generate a random character for each selected character set
  for (let i = 0; i < numOfCharacters; i++) {
    let rng = [Math.floor(Math.random() * charOptions.length)];
    generatedPassword = generatedPassword + charOptions[rng];
  }
  // Once we finish the for loop, return the generated password
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
