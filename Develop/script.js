// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numOptions = "0123456789";
var specialChars = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Define generatePassword function
var generatePassword = function() {
  var passwordLength = prompt("How long would you like your password to be? Select 8 to 128 characters.");
  // Convert to integer
  passwordLength = parseInt(passwordLength);

  
  console.log (passwordLength);
  var lowerCaseConfirm = confirm("Would you like lowercase characters in your password?");
  console.log (lowerCaseConfirm);
  var upperCaseConfirm = confirm("Would you like uppercase characters in your password?");
  console.log (upperCaseConfirm);
  var numConfirm = confirm("Would you like numbers in your password?");
  console.log (numConfirm);
  var specialConfirm = confirm("Would you like special characters in your password?");
  console.log (specialConfirm);
   
    if (lowerCaseConfirm) {

    }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
