// There are a few special cases where the value of this may not end up as the value you expect.
//     Consider the following modification to the previous example:
var name = 'The Window';
var object = {
    name : 'My Object',
    getName: function(){
        return this.name;
    }
};

// The getName() method simply returns the value of this.name. Here are various ways to call
// object.getName() and the results
object.getName(); //'My Object'
(object.getName)(); //'My Object'
(object.getName = object.getName)(); //'The Window' in non-strict mode

// The fi rst line calls object.getName() in the way you normally would and so returns
// 'My Object', as this.name is the same as object.name. The second line places parentheses
// around object.getName before calling it. While this might seem to be a reference just to the
// function, the this value is maintained, because object.getName and (object.getName) are
// defined to be equivalent. The third line performs an assignment and then calls the result. Because
// the value of this assignment expression is the function itself, the this value is not maintained, and
// so 'The Window' is returned.