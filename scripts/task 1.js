// Function that checks whether current year is leap year or not
function LeapYear(year)
{
    if(year % 4 == 0 && year % 100 != 0)
    {
        console.log("It is a leap year");
    }
    else if(year % 400 == 0)
    {
        console.log("It is a leap year");
    }
    else
    {
        console.log("It is not a leap year");
    }
}

var Year = +prompt("Enter a year: ")
LeapYear(Year);