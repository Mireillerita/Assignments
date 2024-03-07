//42.	Write a function that removes the last element from an array.
function removeLastElement(inputArray) {
    inputArray.pop();
    return inputArray;
  }
  
  
  var numbers = [1, 2, 3, 4, 5];
  var arrayWithoutLastElement = removeLastElement(numbers);
  

  console.log( arrayWithoutLastElement);