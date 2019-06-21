// The main difference between this pattern and the previous one is that private variables and
// functions are shared among instances. Since the privileged method is defi ned on the prototype, all
// instances use that same function. The privileged method, being a closure, always holds a reference
// to the containing scope. Consider the following:
(function(){
    var name = '';
    Person = function(value){
        name = value;
    };
    Person.prototype.getName = function(){
        return name;
    };
    Person.prototype.setName = function (value){
        name = value;
    };
})();

var person1 = new Person('Nicholas');
alert(person1.getName()); //'Nicholas'
person1.setName('Greg');
alert(person1.getName()); //'Greg'
var person2 = new Person('Michael');
alert(person1.getName()); //'Michael'
alert(person2.getName()); //'Michael'