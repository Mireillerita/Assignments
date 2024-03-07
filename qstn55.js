//55.	Write a function that checks if a given year is a leap year.
function isLeapYear(year) {
   
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  
  var yearToCheck = 2024;
  
  console.log(yearToCheck + " is a leap year:", isLeapYear(yearToCheck));