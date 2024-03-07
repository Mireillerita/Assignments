//50.	Write a function that checks if an array is sorted in ascending order.
function isArraySortedAscending(inputArray) {
    for (var i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] > inputArray[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  
  var sortedArray = [1, 2, 3, 4, 5];
  var unsortedArray = [5, 3, 7, 2, 1];
  
  console.log( isArraySortedAscending(sortedArray));
  console.log( isArraySortedAscending (unsortedArray));