//38.	Write a function that removes duplicates from an array.
function removeDuplicatesFromArray(inputArray) {
    return [...new Set(inputArray)];
  }
  
  
  var duplicates = [1, 2, 2, 3, 4, 4, 5];
  var uniqueArray = removeDuplicatesFromArray(duplicates);
  
  console.log("Array with duplicates:", duplicates);
  console.log("Array with duplicates removed:", uniqueArray);