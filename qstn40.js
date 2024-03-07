//40.	Write a function that squares each element of an array.
function squareEachElement(inputArray) {
    return inputArray.map(num => num * num);
  }
  
  
  var numbers = [1, 2, 3, 4, 5];
  var squaredNumbers = squareEachElement(numbers);
  
  console.log("Original array:", numbers);
  console.log( squaredNumbers);