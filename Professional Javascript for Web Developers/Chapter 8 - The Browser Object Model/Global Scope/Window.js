//Since the window object doubles as the ECMAScript Global object, all variables and functions
// declared globally become properties and methods of the window object. Consider this example:

var age = 29;
function sayAge(){
    alert(this.age);
}
alert(window.age); //29
sayAge(); //29
window.sayAge(); //29

// Here, a variable named age and a function named sayAge() are defi ned in the global scope, which
// automatically places them on the window object. Thus, the variable age is also accessible as window
// .age, and the function sayAge() is also accessible via window.sayAge(). Since sayAge() exists in
// the global scope, this.age maps to window.age, and the correct result is displayed.
// Despite global variables becoming properties of the window object, there is a slight difference between
// defi ning a global variable and defi ning a property directly on window: global variables cannot be
// removed using the delete operator, while properties defi ned directly on window can. For example:

var age = 29;
window.color = 'red';
//throws an error in IE < 9, returns false in all other browsers
delete window.age;
//throws an error in IE < 9, returns true in all other browsers
delete window.color; //returns true
alert(window.age); //29
alert(window.color); //undefined