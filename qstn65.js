// 65.	Switch Case:
// a.	Calculator Switch:
// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.

// b.	Day of Week:
// Create a program that takes a number representing a day of the week (1-7) and outputs the name of the day.

// c.	Grade System:
// Design a grading system that takes a student's score as input and returns the corresponding grade using a switch case.

// d.	Traffic Light:
// Simulate a traffic light using a switch case. The program should output the color of the traffic light based on user input (1 for red, 2 for yellow, and 3 for green).

// e.	Month Name:
// Write a program that takes a number (1-12) representing a month and outputs the name of the month using a switch case.

// f.	Simple Menu:
// Implement a simple menu system using a switch case. The menu should have options for different operations, and the program should execute the selected operation.

// g.	Currency Converter:
// Build a currency converter that converts between different currencies using a switch case. Users should input the amount, source currency, and target currency.

// h.	Shape Area:
// Write a program that calculates and outputs the area of different shapes (circle, square, triangle) based on user input using a switch case.

// i.	Season Detector:
// Create a program that takes a month as input and outputs the corresponding season (spring, summer, fall, winter) using a switch case.



function getGrade(score) {
    switch (true) {
      case score >= 90:
        return 'A';
      case score >= 80:
        return 'B';
      case score >= 70:
        return 'C';
      case score >= 60:
        return 'D';
      default:
        return 'F';
    }
  }
  
  // Example usage:
  var studentGrade = getGrade(75);
  console.log("Student's grade:", studentGrade);
 
  
  
 
  function trafficLightColor(code) {
    switch (code) {
      case 1:
        return 'Red';
      case 2:
        return 'Yellow';
      case 3:
        return 'Green';
      default:
        return 'Invalid code';
    }
  }
  
  // Example usage:
  var lightColor = trafficLightColor(2);
  console.log("Traffic light color:", lightColor);