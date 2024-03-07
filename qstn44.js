//a function that checks if all elements in an array are positive.
function areAllPositiveElements(inputArray) {
    return inputArray.every(element => element > 0);
  }
  
  
  var positiveNumbers = [5, 2, 8, 1, 4];
  var mixedNumbers = [5, -2, 8, 1, 4];
  
  console.log(areAllPositiveElements(positiveNumbers));
  console.log(areAllPositiveElements(mixedNumbers));
  