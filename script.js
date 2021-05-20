
// Assignment Code
var generateBtn = document.querySelector("#generate");

const randomPass = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};

const randomCharUtils = Object.values(randomPass)



function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSpecial(){
  const special ="!@#$%^&*_+-=";
  return special[Math.floor(Math.random()*special.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = window.prompt ("please select password length, between 8-128 characters.");

  passwordLength=Number(passwordLength)

  if ( passwordLength <=7 || passwordLength >=129){
    console.log("Your Password doesn't meet the criteria")
    return;
  }

  let passWord = ""

  while(passWord.length <= passwordLength) {
    const newCharacter = randomCharUtils[Math.floor(Math.random()*randomCharUtils.length)]()
    passWord += newCharacter;
  };

  return passWord;
}













































const letters = "abcdefghijklmnopqrstuvwxyz";
const upperLetter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers ="0123456789";
const special ="!@#$%^&*_-=+";


// const passwordTxt = document.getElementById("passowrd");
// const length = document.getle





// for (i = 1; i <= 8; i++) {
//     var char = Math.floor(Math.random()
//                 * str.length + 1);
      
//     pass += str.charAt(char)
// }
  
// return pass;






if(password.length<8){
    console.log("your password does not meat specified parameters")
}