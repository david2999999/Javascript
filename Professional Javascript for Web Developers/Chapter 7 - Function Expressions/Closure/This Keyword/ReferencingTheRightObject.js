// Remember that each function automatically gets two special variables as soon as the function is
// called: this and arguments. An inner function can never access these variables directly from an
// outer function. It is possible to allow a closure access to a different this object by storing it in
// another variable that the closure can access, as in this example:
var name = 'The Window';

var object = {
    name : 'My Object',
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};

alert(object.getNameFunc()()); //'My Object'