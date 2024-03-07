//54.	Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeEachWord(sentence) {
    return sentence.replace(/\b\w/g, match => match.toUpperCase());
  }
  
 
  var inputSentence = "this is a sample sentence.";
  
  console.log("Original sentence:", inputSentence);
  console.log( capitalizeEachWord(inputSentence));