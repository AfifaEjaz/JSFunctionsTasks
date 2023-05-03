// Function that returns leap years of upcoming 10 years
function LeapYear(year) 
{
    var Leapyear = [];
    // incrementing year by 1 so that it dont take starting year as leap (because we want to print "Upcoming years")
    year = 1 + year;

    for (var i = 0; i < 10; i++) 
    {
        if (year % 4 == 0 && year % 100 != 0) 
        {
            Leapyear.push(year);
            year = 1 + year;
        }
        else if (year % 400 == 0) 
        {
            Leapyear.push(year);
            year = 1 + year;
        }
        else 
        {
            year = 1 + year;
        }
    }
    return Leapyear;
}

var InputYear = +prompt("Enter a year to get leap years of upcoming 10years : ")
alert("Upcoming leap years are: " + LeapYear(InputYear));