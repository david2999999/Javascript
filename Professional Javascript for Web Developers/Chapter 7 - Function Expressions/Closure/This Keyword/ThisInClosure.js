// Using the this object inside closures introduces some complex behaviors. The this object is bound
// // at runtime based on the context in which a function is executed: when used inside global functions,
// //     this is equal to window in nonstrict mode and undefined in strict mode, whereas this is equal to
// // the object when called as an object method. Anonymous functions are not bound to an object in
// // this context, meaning the this object points to window unless executing in strict mode (where this
// // is undefined).

var name = 'The Window';

var object = {
    name : 'My Object',
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};

alert(object.getNameFunc()()); //'The Window' (in non-strict mode)