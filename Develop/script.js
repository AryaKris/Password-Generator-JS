var numbersList = [0,1,2,3,4,5,6,7,8,9];
var uppercaseList = ["A","B", "C","D", "E"];
var lowercaseList = [ "a", "b", "c", "d", "e"];
var specialList = ["!", "@", "#", "$", "%"];
var totalList = [];

var generatePassword = function() {
var passwordLength= prompt("How long is the password?")
console.log (passwordLength);
  if(passwordLength < 8) {
    alert("value of the password length should be atleast 8")
    return "Password is too short"
  }
  
    else if (passwordLength > 128) {
  alert("value of the password should not be more than 128")
  return "password is too long"
    }
  
var numbersTrue = confirm("Do you want numbers in your password?")
if (numbersTrue === true) {
totalList =totalList.concat (numbersList);
// var item = randomize(numbersList);
}

return "password";
}
















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
