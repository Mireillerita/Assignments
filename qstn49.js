// a function that calculates the Fibonacci sequence up to n numbers.
function fibonacciSequence(n) {
    var fibArray = [0, 1];
  
    for (var i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
  
    return fibArray;
  }
  
  
  var n = 8; 
  var fibonacciResult = fibonacciSequence(n);
  
  console.log("Fibonacci sequence up to", n, "numbers:", fibonacciResult);