//8.	Create a function that receives an array of numbers and returns the average of the numbers

function calculateAverage(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;

    return average;
}
const myNumbers = [1,20,5,10];
const result = calculateAverage(myNumbers);
console.log(result)
