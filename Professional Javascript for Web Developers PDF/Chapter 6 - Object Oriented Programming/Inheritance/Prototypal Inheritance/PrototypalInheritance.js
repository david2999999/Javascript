// In 2006, Douglas Crockford wrote an article titled “Prototypal Inheritance in JavaScript” in which
// he introduced a method of inheritance that didn’t involve the use of strictly defi ned constructors. His
// premise was that prototypes allow you to create new objects based on existing objects without the
// need for defi ning custom types. The function he introduced to this end is as follows:
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var person = {
    name: “Nicholas”,
    friends: [“Shelby”, “Court”, “Van”]
};
var anotherPerson = object(person);
anotherPerson.name = “Greg”;
anotherPerson.friends.push(“Rob”);

var yetAnotherPerson = object(person);
yetAnotherPerson.name = “Linda”;
yetAnotherPerson.friends.push(“Barbie”);
alert(person.friends); //”Shelby,Court,Van,Rob,Barbie”