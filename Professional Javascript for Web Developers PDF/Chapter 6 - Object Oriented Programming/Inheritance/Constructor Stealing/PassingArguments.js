// One advantage that constructor stealing offers over prototype chaining is the ability to pass arguments
// into the supertype constructor from within the subtype constructor. Consider the following:
function SuperType(name){
    this.name = name;
}

function SubType(){
    //inherit from SuperType passing in an argument
    SuperType.call(this, “Nicholas”);
    //instance property
    this.age = 29;
}

var instance = new SubType();
alert(instance.name); //”Nicholas”;
alert(instance.age); //29