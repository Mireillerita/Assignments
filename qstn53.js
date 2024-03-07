//53.	Write a function that finds the median of an array of numbers.
function findMedian(inputArray) {
    
    var sortedArray = inputArray.slice().sort((a, b) => a - b);
  
    var length = sortedArray.length;
    var middleIndex = Math.floor(length / 2);
  
   
    if (length % 2 === 0) {
      return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
      
      return sortedArray[middleIndex];
    }
  }
  
  var numbers = [4, 7, 1, 9, 3, 5];
  
  console.log("Original array:", numbers);
  console.log("Median of the array:", findMedian(numbers));