//a function that counts the number of vowels in a string.
function countVowels(inputString) {
    
    var vowelRegex = /[aeiou]/gi;
  
    
    var vowelsArray = inputString.match(vowelRegex);
  
    
    return vowelsArray ? vowelsArray.length : 0;
  }
  
  
  var testString = "Hello, World!";
  var vowelCount = countVowels(testString);
  
  console.log("Number of vowels in the string:", vowelCount);