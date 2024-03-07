//56.	Write a function that finds the intersection of two arrays.
function findIntersection(array1, array2) {
    
    return array1.filter(element => array2.includes(element));
  }
  
  
  var arrayA = [1, 2, 3, 4, 5];
  var arrayB = [3, 4, 5, 6, 7];
  
  console.log("Array A:", arrayA);
  console.log("Array B:", arrayB);
  console.log("Intersection of Array A and Array B:", findIntersection(arrayA, arrayB));