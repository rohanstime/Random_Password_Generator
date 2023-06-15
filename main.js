var passBox = document.getElementById("password");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var digit = "0123456789";

var symbol = "@#£_&-+()/*:;!?~`|•√π÷×§∆}{=°^¢$¥€%©®™✓[]";

var allChars = upperCase + lowerCase + digit + symbol;

var length = 12;

function createpass() {
  var password = "";
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  
  password += digit[Math.floor(Math.random() * digit.length)];
  
  password += symbol[Math.floor(Math.random() * symbol.length)];
  
  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
    
  }
  
  passBox.value = password;
  
  
}

function copypass(){
  passBox.select();
  document.execCommand("copy");
}