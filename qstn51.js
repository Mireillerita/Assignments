//51.	Write a function that filters out negative numbers from an array.
function filterOutNegativeNumbers(inputArray) {
    return inputArray.filter(num => num >= 0);
  }
  
  
  var numbers = [1, -2, 3, -4, 5];
  
  console.log( numbers);
  console.log( filterOutNegativeNumbers(numbers))
