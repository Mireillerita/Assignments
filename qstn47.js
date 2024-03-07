//47.	Write a function that generates a random number between a given range
function generateRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var randomNum = generateRandomNumber(1, 10);
  
  console.log( randomNum);
