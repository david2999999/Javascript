var person = {
    firstName: "Colt",

    sayHi: function(){
        return "Hi " + this.firstName;
    },

    determineContext: function () {
        return this === person;
    },

    dog: {
        sayHello: function () {
            return "Hello " + this.firstName;
        },
        
        determineContext: function () {
            return this === person;
        }
    }
};

person.dog.sayHello.call(person);   // Hello Colt
person.dog.determineContext.call(person);   // true





function sayHi() {
    return "Hi " + this.firstName;
}

var colt = {
    firstName: "colt"
};

var elie = {
    firstName: "elie"
};

sayHi.call(colt);   // Hi colt
sayHi.call(elie);   // hi elie




function addNumbers(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
}

var colt = {
    firstName: "Colt"
};

var elie = {
    firstName: "elie"
};

addNumbers.call(elie, 1,2,3,4);

















