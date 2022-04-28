var colt = {
    firstName: "colt",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi " + this.firstName);
        }, 1000);
    }
};

colt.sayHi(); // Hi undefined (1 sec later)

var colt2 = {
    firstName: "colt",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi " + this.firstName);
        }.bind(this), 1000);
    }
};

colt.sayHi(); // Hi colt (1 second later)