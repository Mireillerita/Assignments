// 17.	Create a function that determines the age classification of people:
// Bellow are classifications according to specific conditions:
 
//     MIMICRY: 			0 - 12
//     SELF-DISCOVERY: 	13 - 19
//     COMMITMENT: 		20 - 45
//     LEGACY:			46 - Above

function determineAgeClassification(age){
    if(age >= 0 && age <= 12){
        return "MIMICRY";
    }
    else if(age >= 13 && age <= 19){
        return "SELF-DISCOVERY";
    }
    
    else if(age >= 20 && age <= 45){
    return "COMMITIMENt";
    }

    else {
        return "LEGACY";
    }
    
}
var age = 25;
var ageClassification = determineAgeClassification(age);
console.log(ageClassification);
