// Function to Calculate User's age
function AgeCalculator(UserDOB)
{
    var current = new Date();
    var age = current - UserDOB;
    age = Math.trunc(age/(1000*60*60*24*365));
    return age; 
}

var DOB = new Date(prompt("Enter your DOB: "));
console.log(AgeCalculator(DOB));


