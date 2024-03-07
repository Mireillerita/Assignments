//64.	Write a function that generates a pyramid pattern of a given height.
function generatePyramid(height) {
    for (var i = 1; i <= height; i++) {
      
      var spaces = " ".repeat(height - i);
  
      
      var asterisks = "*".repeat(2 * i - 1);
  
      console.log(spaces + asterisks);
    }
  }
  
  
  var pyramidHeight = 5;
  
  console.log("Pyramid pattern with height", pyramidHeight + ":");
  generatePyramid(pyramidHeight);