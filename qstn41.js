//41.	Write a function that returns the first n elements of an array.
function getFirstNElements(inputArray, n) {
    return inputArray.slice(0, n);
  }
  
  
  var numbers = [1, 2, 3, 4, 5];
  var firstThreeElements = getFirstNElements(numbers, 3);
  
  console.log( numbers);
  console.log( firstThreeElements);