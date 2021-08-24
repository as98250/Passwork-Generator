var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var upperCase = letters.toUpperCase();
var numbers = "0123456789";
var special = "!@#$%^&*()-=_+{/[|}}^";
store = [];

var upperCase = true;
var lowerCase = true;
var number = true;
var specialCharacters = true;

letters = confirm('Do you want lower case?');
upperCase = confirm('Do you want uppercase?');
number = confirm('Do you want numbers?');
special = confirm('Do you want special charecters');

function generatePassword() {
  var length = 16;
  var password = "";
  var variable = "";

  if (lowercase) {
    var random = Math.floor(Math.random() * letters.length);
    var chosenLetter = letters[random];
    variable += letters;
    stored.push(chosenLetter);
  }
  if (upperCase) {
    var random = Math.floor(Math.random() * upperCase.length);
    var chosenUpper = upperCase[random];
    variable += upperCase;
    stored.push(chosenUpper);
  }
  if (number) {
    var random = Math.floor(Math.random() * numbers.length);
    var chosenNumber = numbers[random];
    variable += numbers;
    stored.push(chosenNumber);
  }
  if (special) {
    var random = Math.floor(Math.random() * special.length);
    var chosenLSpecial = special[random];
    variable += special;
    stored.push(chosenLSpecial);


  for (var i = 0; i < length - stored.length; i++) {
    var random = Math.floor(Math.random() * letters.length);
    passwork += letters[random];
  }
  
  console.log(password);
  console.log(variable);
  console.log(stored);
  return password;
}

  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)}

