//62.	Write a function that counts the number of words in a sentence.
function countWords(sentence) {
   
    return sentence.split(/\s+/).filter(word => word.length > 0).length;
  }
  
  
  var testSentence = "This is a sample sentence.";
  
  console.log("Number of words in the sentence:", countWords(testSentence));