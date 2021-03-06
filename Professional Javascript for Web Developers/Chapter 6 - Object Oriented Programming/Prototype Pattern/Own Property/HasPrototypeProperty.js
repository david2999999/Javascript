function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}

function Person(){}
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
    alert(this.name);
};

var person = new Person();
alert(hasPrototypeProperty(person, “name”)); //true
person.name = “Greg”;
alert(hasPrototypeProperty(person, “name”)); //false