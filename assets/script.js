var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var upperCase = letters.toUpperCase();
var numbers = "0123456789";
var special = "!@#$%^&*()-=_+{/[|}}^"
store = [];
var upperCase = false;
var lowerCase = false;
var number = false;
var specialCharacters = false;

function generatePassword() {
  var length = 10;

  if (lowercase) {
    var random = Math.floor(Math.random() * letters.length);
    var chosenLetter = letters[random];
    stored.push(chosenLetter);
  }
  if (upperCase) {
    var random = Math.floor(Math.random() * uppperCase.length);
    var chosenUpper = upperCase[random]
    stored.push(chosenUpper);
  }
  if (number) {
    var random = Math.floor(Math.random() * numbers.length);
    var chosenNumber = numbers[random];
    stored.push(chosenNumber);
  }
  if (special) {
    var random = Math.floor(Math.random() * special.length);
    var chosenLSpecial = special[random];
    stored.push(chosenLSpecial)


  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * letters.length);
    passwork += letters[random]
  }
  
  console.log(password);
  return password;
}
generatePassword();


  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);