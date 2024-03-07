//
function stringModifier(inputString, position, replacementChar) {
    
    if (position < 0 || position >= inputString.length) {
      console.log("Invalid position. Please provide a position within the string length.");
      return inputString;
    }
  
    
    var modifiedStringArray = inputString.split('');
    modifiedStringArray[position] = replacementChar;
  
    var modifiedString = modifiedStringArray.join('');
  
    return modifiedString;
  }
  
  var originalString = "Hello, World!";
  var modifiedPosition = 7;
  var replacementCharacter = '*';
  
  var modifiedResult = stringModifier(originalString, modifiedPosition, replacementCharacter);
  console.log(modifiedResult);