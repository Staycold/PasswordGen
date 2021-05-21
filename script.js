
// Assignment Code
var generateBtn = document.querySelector("#generate");

const randomPass = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial
};



const randomLower = getRandomLower()
const randomUpper = getRandomUpper()
const randomNumber = getRandomNumber()
const randomSpecial = getRandomSpecial()

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
  console.log(passwordLength)
  passwordLength=Number(passwordLength)
  console.log(passwordLength)
  if (typeof passwordLength !== 'number' || (passwordLength <=7 || passwordLength >=129)){
    window.alert("Please enter a valid number")
    generatePassword();
  }
  
  let needSpecial = confirm("Do you want special characters in your password?");
  let needNum = confirm("Do you want numbers in your password?");
  let needLower = confirm("Do you want lowercase characters in your password?");
  let needUpper = confirm("Do you wanr uppercase characters in your password?");
  
   let utilsUse = [];
   
   if (needSpecial){
     utilsUse.push(getRandomSpecial);
   }
   if (needNum){
    utilsUse.push(getRandomNumber);
  }
  if (needUpper){
    utilsUse.push(getRandomUpper);
  }
  if (needLower){
    utilsUse.push(getRandomLower);
  }
  if (!needSpecial && !needNum && !needLower && !needUpper ){
    window.alert("Do you want a password or not?")
  }
  
  

  // if ( passwordLength <=7 || passwordLength >=129){
  //   console.log("Your Password doesn't meet the criteria")
  //   return;
  // }

  let passWord = ""

  while(passWord.length <= passwordLength) {
    const newCharacter = utilsUse[Math.floor(Math.random()*utilsUse.length)]()
    passWord += newCharacter;
  };

  return passWord;
}


