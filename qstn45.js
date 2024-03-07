//45.	Write a function that calculates the sum of the even numbers in an array
function sumOfEvenNumbers(inputArray) {
    return inputArray.reduce((sum, num) => (num % 2 === 0) ? sum + num : sum, 0);
  }
  
 
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log(sumOfEvenNumbers(numbers));