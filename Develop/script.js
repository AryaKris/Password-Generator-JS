//Password Generator should generate a password with 8-128 characters
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
//Numeric charecters
var numbersList = [0,1,2,3,4,5,6,7,8,9];


//Uppercase Alphabets
var uppercaseList = ["A","B", "C","D", "E", "F", "G", "H", "I", "J", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];


//lowercase Alphabets
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// special charecters
var specialList = ["!", "@", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// prompt is used to ask the user how many charecters he would like to have in his password
var generatePassword = function() {
  var totalList = [];

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
  // Confirming the parameters that the user needs for his password
  var numbersTrue = confirm("Do you want numbers in your password?")
  if (numbersTrue === true) {
    totalList =totalList.concat (numbersList);
  }
  
  var uppercaseTrue = confirm("Do you want uppercase in your password?")
  if (uppercaseTrue === true) {
    totalList = totalList.concat(uppercaseList);    
  }

  var lowercaseTrue = confirm("Do you want lowercase in your password?")
  if (lowercaseTrue === true) {
    totalList = totalList.concat(lowercaseList);
  }

  var specialListTrue = confirm("Do you want specialList in your password?")
  if (specialListTrue === true) {
    totalList = totalList.concat(specialList);
  }
  console.log (item);
  var item = [];
  for (var i = 0; i < passwordLength; i++) {
    item = item + totalList[Math.floor(Math.random() * totalList.length)];

    console.log(item)
  }
  return item;
  
}

console.log(generatePassword);

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

