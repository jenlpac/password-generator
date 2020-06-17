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


  // Ensure length selection is within defined terms
  if(passwordLength >= 8 && passwordLength <= 128) {

    // Create function to call if character type selections are not valid
    var charType = function() {
      var lowerCaseConfirm = confirm("Would you like lowercase characters in your password?");
      console.log (lowerCaseConfirm);
      var upperCaseConfirm = confirm("Would you like uppercase characters in your password?");
      console.log (upperCaseConfirm);
      var numConfirm = confirm("Would you like numbers in your password?");
      console.log (numConfirm);
      var specialConfirm = confirm("Would you like special characters in your password?");
      console.log (specialConfirm);
      
      // Ensure at least one character type is selected
      if(!lowerCaseConfirm && !upperCaseConfirm && !numConfirm && !specialConfirm) {
        alert("Please select at least one character type.");
        return charType();
      }

      // Use selected characters and length to make a password
      // Start with a password variable that is blank, add selected characters with if statements
      var mkPassword = "";

      if(lowerCaseConfirm) {
        mkPassword += lowerCase;
      }

      if(upperCaseConfirm) {
        mkPassword += upperCase;
      }

      if(numConfirm) {
        mkPassword += numOptions;
      }

      if(specialConfirm) {
        mkPassword += specialChars;
      }

      // Use for loop to add characters up to selected length
      for (i= 0; i < passwordLength; i++) {
        password += mkPassword[Math.floor(Math.random() * mkPassword.length)];
      }
      console.log (password);
    }
  charType();
  }
  else {
    alert("Please select a valid password length.");
    return generatePassword();
  }
return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
