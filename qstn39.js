//39.	Write a function that checks if a given value is present in an array
function checkValueInArray(inputArray, targetValue) {
    return inputArray.includes(targetValue);
  }
  

  var mates = ["rita", "diane", "naima","diannah"];
  var isOrangeIncluded = checkValueInArray(mates, "diane");
  
  console.log( isOrangeIncluded);