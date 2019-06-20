// It’s also possible to retrieve the property descriptor for a given property by using the ECMAScript 5
// Object.getOwnPropertyDescriptor() method. This method accepts two arguments: the object on
// which the property resides and the name of the property whose descriptor should be retrieved. The
// return value is an object with properties for configurable, enumerable, get, and set for accessor
// properties or configurable, enumerable, writable, and value for data properties

var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

var descriptor = Object.getOwnPropertyDescriptor(book, “_year”);
alert(descriptor.value); //2004
alert(descriptor.confi gurable); //false
alert(typeof descriptor.get); //”undefi ned”

var descriptor = Object.getOwnPropertyDescriptor(book, “year”);
alert(descriptor.value); //undefi ned
alert(descriptor.enumerable); //false
alert(typeof descriptor.get); //”function”