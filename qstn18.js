// 18.	Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//     How to calculate Body Mass Index:
//     BMI = weight(kg) / (height(m) x height(m))

function calculateBMI(weight,height){
    var BMI = weight / (height * height);
    var classification ='';

    if (BMI < 18.5) {
        classification = "Underweight";
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        classification = "Normal Weight";

      } else if (BMI >= 25 && BMI < 29.9) {
        classification = "Overweight";

      } else {
        classification = "Obese";
      }

      var roundedBMI = Math.round(BMI);
      return {
        BMI: roundedBMI,
        classification: classification
      };
    }
    var personWeight = 70; // in kilograms
    var personHeight = 175; // in centimeters
    
    var result = calculateBMI(personWeight, personHeight);
    console.log("bmi:", result.BMI);
    console.log("Classification:", result.classification);
