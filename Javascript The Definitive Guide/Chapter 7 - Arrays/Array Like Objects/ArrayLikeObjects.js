// The following code takes a regular object, adds properties to make it an array-like
// object, and then iterates through the “elements” of the resulting pseudo-array:
var a = {}; // Start with a regular empty object
// Add properties to make it "array-like"

var i = 0;
while(i < 10) {
    a[i] = i * i;
    i++;
}

a.length = i;
// Now iterate through it as if it were a real array
var total = 0;
for(var j = 0; j < a.length; j++)
    total += a[j];