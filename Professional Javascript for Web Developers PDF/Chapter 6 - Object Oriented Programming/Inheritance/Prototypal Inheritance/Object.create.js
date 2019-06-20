// ECMAScript 5 formalized the concept of prototypal inheritance by adding the Object.create()
// method. This method accepts two arguments, an object to use as the prototype for a new object and
// an optional object defi ning additional properties to apply to the new object. When used with one
// argument, Object.create() behaves the same as the object() method:
var person = {
    name: “Nicholas”,
    friends: [“Shelby”, “Court”, “Van”]
};
var anotherPerson = Object.create(person);
anotherPerson.name = “Greg”;
anotherPerson.friends.push(“Rob”);

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = “Linda”;
yetAnotherPerson.friends.push(“Barbie”);
alert(person.friends); //”Shelby,Court,Van,Rob,Barbie”


// The second argument for Object.create() is in the same format as the second argument for
// Object.defineProperties(): each additional property to defi ne is specifi ed along with its
// descriptor. Any properties specifi ed in this manner will shadow properties of the same name on the
// prototype object. For example:
var person = {
    name: “Nicholas”,
    friends: [“Shelby”, “Court”, “Van”]
};
var anotherPerson = Object.create(person, {
    name: {
        value: “Greg”
    }
});
alert(anotherPerson.name); //”Greg”