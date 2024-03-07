//48.	Write a function that returns the reverse of an array.
function reverseArray(inputArray) {
    return inputArray.slice().reverse();
  }
  

  var myNum = [1,2,3,7,8,0];
  
  console.log("Original array:", myNum);
  console.log("Reversed array:", reverseArray(myNum));