// Another take on the module pattern calls for the augmentation of the object before returning it. This
// pattern is useful when the singleton object needs to be an instance of a particular type but must be
// augmented with additional properties and/or methods. Consider the following example:
var singleton = function(){
    //private variables and functions
    var privateVariable = 10;
    function privateFunction(){
        return false;
    }

    //create object
    var object = new CustomType();

    //add privileged/public properties and methods
    object.publicProperty = true;
    object.publicMethod = function(){
        privateVariable++;
        return privateFunction();
    };

    //return the object
    return object;
}();