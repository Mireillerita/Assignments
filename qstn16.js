// 16.	Given an array like this: 
// var some numbers = [3,4,8,2,1,2,2,6,3,4];
// a.	Create a function to sort and arrange these elements of the array in ascending order.
// b.	Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
// c.	From the same sorted array, also display the first 3 numbers.

var numbers= [3,4,8,2,1,2,2,6,3,4];
function sortAndArrangeAscending (inputArray){
    var sortedArray = inputArray.slice().sort((a,b) => a-b);
    return sortedArray;

}
function modifyAndDisplayFirstLastThree(inputArray) {
   
    var sortedArray = sortAndArrangeAscending(inputArray); 
    var firstThree = sortedArray.slice(0, 3);
    var lastThree = sortedArray.slice(-3);
    var modifiedArray = lastThree.concat(sortedArray, firstThree);
    inputArray.length = 0;
    inputArray.push(...modifiedArray);
  
    
    return modifiedArray;
  }

  function displayFirstThreeFromSorted(inputArray) {
  
    var sortedArray = sortAndArrangeAscending(inputArray);
    var firstThree = sortedArray.slice(0, 3);
    return firstThree;
  }
  console.log("sortedrrays:" ,sortAndArrangeAscending (numbers));
  console.log("modified numbers:", modifyAndDisplayFirstLastThree(numbers));
