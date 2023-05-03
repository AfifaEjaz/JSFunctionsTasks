// Function that converts string into capital case
function Capital(string)
{
    var caps = string.toUpperCase();
    return caps;
}

var InputString = prompt("Enter a string: ");
console.log(Capital(InputString));

