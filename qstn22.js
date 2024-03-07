//a function that checks if a number is even.
function isEven(number) {
    return number % 2 === 0;
}


var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);