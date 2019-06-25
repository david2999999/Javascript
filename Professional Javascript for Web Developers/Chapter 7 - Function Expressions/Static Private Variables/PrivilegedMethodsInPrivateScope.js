(function(){
//private variables and functions
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }

    //constructor
    MyObject = function(){
    };

    //public and privileged methods
    MyObject.prototype.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };
})();

//In this pattern, a private scope is created to enclose the constructor and its methods. The private
// variables and functions are defined fi rst, followed by the constructor and the public methods.
// Public methods are defined on the prototype, as in the typical prototype pattern. Note that this
// pattern defines the constructor not by using a function declaration but instead by using a function
// expression. Function declarations always create local functions, which is undesirable in this case.
// For this same reason, the var keyword is not used with MyObject. Remember: initializing an
// undeclared variable always creates a global variable, so MyObject becomes global and available
// outside the private scope. Also keep in mind that assigning to an undeclared variable in strict mode
// causes an error.