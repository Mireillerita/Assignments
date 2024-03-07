//a function that reverses a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

var reversedString = reverseString("Hello");
console.log(reversedString);