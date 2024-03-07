//7.	Create a function that receives an array and returns the smallest number from that array
function findSmallestValue(arr){
    if(arr.length === 0){
        return undefined;
    }
    let smallestValue = arr[0];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < smallestValue){

            smallestValue = arr[i];
        }
    }
    return smallestValue;

}
const myArray = [4, 9, 2, 7, 5, 1];
const maxValue = findSmallestValue(myArray);

console.log("Smallest value in the array:", maxValue);