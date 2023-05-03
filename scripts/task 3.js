// Function to generate OTP.
function GenerateOTP()
{
    var OTP = '';

    for(var i=0 ; i<6 ; i++)
    {
        OTP += Math.round((Math.random()*10));
    }
    return OTP;
}

alert("Your OTP is: " + GenerateOTP());