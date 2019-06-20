var num1 = 5;
var num2 = num1;

// When a reference value is assigned from one variable to
// another, the value stored on the variable object is also
// copied into the location for the new variable. The
// difference is that this value is actually a pointer to an
// object stored on the heap. Once the operation is complete,
// two variables point to exactly the same object, so
// changes to one are refl ected on the other,

var obj1 = new Object();
var obj2 = obj1;
obj1.name = “Nicholas”;
alert(obj2.name); //”Nicholas”