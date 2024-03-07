//6.	Create a function that receives an array and returns the greatest value inside that array
function findGreatestValue(arr){
    if(arr.length === 0){
        return undefined;
    }
    let greatestValue = arr[0];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > greatestValue){

            greatestValue = arr[i];
        }
    }
    return greatestValue;

}
const myArray = [4, 9, 2, 7, 5, 1];
const maxValue = findGreatestValue(myArray);

console.log("Greatest value in the array:", maxValue);