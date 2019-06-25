var singleton = function(){
    //private variables and functions
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }

    //privileged/public methods and properties
    return {
        publicProperty: true,
        publicMethod : function(){
            privateVariable++;
            return privateFunction();
        }
    };
}();

// The module pattern uses an anonymous function that returns an object. Inside of the anonymous
// function, the private variables and functions are defi ned fi rst. After that, an object literal is
// returned as the function value. That object literal contains only properties and methods that should
// be public. Since the object is defi ned inside the anonymous function, all of the public methods
// have access to the private variables and functions. Essentially, the object literal defi nes the public
// interface for the singleton.