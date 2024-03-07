//9.	Create a function that combines two arrays into one single array. 
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

var arrange = ['a', 'b', 'c', 'd'];
var arrayTo = ['e', 'f', 'g'];

var result = combineArrays(arrange, arrayTo);
console.log(result);

