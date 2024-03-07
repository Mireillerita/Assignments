//43.	Write a function that sorts an array of numbers in ascending order.
function sortArrayAscending(inputArray) {
    return inputArray.slice().sort((a, b) => a - b);
  }
  
  var numbers = [5, 2, 8, 1, 4];
  var sortedNumbers = sortArrayAscending(numbers);
  
  console.log("Original array:", numbers);
  console.log("Array sorted in ascending order:", sortedNumbers);