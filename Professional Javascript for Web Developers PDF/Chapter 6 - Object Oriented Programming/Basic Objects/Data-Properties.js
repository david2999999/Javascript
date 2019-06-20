// This example creates a property called name with a value of “Nicholas” that is read-only. The
// value of this property can’t be changed, and any attempts to assign a new value are ignored in
// nonstrict mode. In strict mode, an error is thrown when an attempt is made to change the value of a
// read-only property.
var person = {};

Object.defineProperty(person, “name”, {
    writable: false,
    value: “Nicholas”
});

alert(person.name); //”Nicholas”
person.name = “Greg”;
alert(person.name); //”Nicholas”

// Here, setting configurable to false means that the property cannot be removed from the object.
// Calling delete on the property has no effect in nonstrict mode and throws an error in strict mode.
// Additionally, once a property has been defi ned as nonconfi gurable, it cannot become confi gurable
// again.
var person = {};
Object.defineProperty(person, “name”, {
    configurable: false,
    value: “Nicholas”
});
alert(person.name); //”Nicholas”
delete person.name;
alert(person.name); //”Nicholas”