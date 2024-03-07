//a function that calculates the factorial of a number.
function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is undefined for negative numbers.";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
var result = calculateFactorial(5);
console.log(result); 