//46.	Write a function that converts an array of strings to uppercase.
function convertToUppercase(inputArray) {
    return inputArray.map(str => str.toUpperCase());
  }
  
 
  var strings = ["apple", "banana", "orange"];
  
  console.log("Original array:", strings);
  console.log( convertToUppercase(strings));