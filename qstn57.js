//57.	Write a function that checks if a number is prime.
function isPrime(number) {
    
    if (number < 2) {
      return false;
    }
  
 
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Found a factor, not prime
      }
    }
  
    return true; // No factors found, prime
  }
  
  
  var testNumber = 17;
  
  console.log(testNumber + " is prime:", isPrime(testNumber));