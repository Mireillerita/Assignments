//36.	Write a function that counts the number of consonants in a string.
function countConsonants(inputString) {
    
    var consonantRegex = /[bcdfghjklmnpqrstvwxyz]/ig;
  
    
    var consonantArray = inputString.match(consonantRegex);
  
    
    return consonantArray ? consonantArray.length : 0;

}
  
  
  var testString = "Hello, World!";
  var consonantCount = countConsonants(testString);
  
  console.log("Number of consonants in the string:", consonantCount);



