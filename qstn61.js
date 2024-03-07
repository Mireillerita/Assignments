
// 61.	Write a function that checks if a given string contains only digits.
function containsOnlyDigits(inputString) {
   
    return /^\d+$/.test(inputString);
  }
  
  
  var testString1 = "12345";
  var testString2 = "abc123";
  
  console.log("Does '" + testString1 + "' contain only digits?", containsOnlyDigits(testString1));
  console.log("Does '" + testString2 + "' contain only digits?", containsOnlyDigits(testString2));