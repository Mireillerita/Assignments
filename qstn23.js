//a function that checks if a number is odd.
function isOdd(number) {
    return number % 2 !== 0;
}


var numbers = [1, 2, 3, 4, 5, 6];
var oddNumbers = numbers.filter(isOdd);

console.log(oddNumbers);