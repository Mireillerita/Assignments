//a function that calculates the square of a number.
function calculateSquareArray(numbers) {
    return numbers.map(num => num * num);
}


var numbers = [2, 3, 4, 5, 6];
var squaredNumbers = calculateSquareArray(numbers);

console.log(squaredNumbers)