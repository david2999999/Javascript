// The parasitic constructor pattern is typically a fallback when the other patterns fail. The basic idea
// of this pattern is to create a constructor that simply wraps the creation and return of another object
// while looking like a typical constructor. Here’s an example:
function Person(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o;
}
var friend = new Person(“Nicholas”, 29, “Software Engineer”);
friend.sayName(); //”Nicholas”


function SpecialArray(){
    //create the array
    var values = new Array();
    //add the values
    values.push.apply(values, arguments);
    //assign the method
    values.toPipedString = function(){
        return this.join(“|”);
    };
    //return it
    return values;
}
var colors = new SpecialArray(“red”, “blue”, “green”);
alert(colors.toPipedString()); //”red|blue|green”