//5.	Create a function that receives an array and returns the sum of all the elements inside that array
function calculateArraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


const myArray = [1, 2, 3, 4, 5];
const result = calculateArraySum(myArray);

console.log("Sum of array elements:", result);