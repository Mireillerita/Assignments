//37.	Write a function that finds the index of a given character in a string.
function findCharacterIndex(inputString, targetCharacter) {
    return inputString.indexOf(targetCharacter);
  }
  
  
  var colors = "red, green, blue";
  var indexOfGreen = findCharacterIndex(colors, "g");
  
  console.log("Index of 'g' in the string:", indexOfGreen);
