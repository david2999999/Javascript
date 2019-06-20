// [[Configurable]] — Indicates if the property may be redefi ned by removing the property
// via delete, changing the property’s attributes, or changing the property into a data
// property. By default, this is true for all properties defi ned directly on an object.

// [[Enumerable]] — Indicates if the property will be returned in a for-in loop. By default,
// this is true for all properties defi ned directly on an object.

// [[Get]] — The function to call when the property is read from. The default value is
// undefined.

// [[Set]] — The function to call when the property is written to. The default value is
// undefined.

var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, “year”, {
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
alert(book.edition); //2

// In this code, an object book is created with two default properties: _year and edition. The
// underscore on _year is a common notation to indicate that a property is not intended to be accessed
// from outside of the object’s methods. The year property is defi ned to be an accessor property
// where the getter function simply returns the value of _year and the setter does some calculation
// to determine the correct edition. So changing the year property to 2005 results in both _year and
// edition changing to 2. This is a typical use case for accessor properties, when setting a property
// value results in some other changes to occur.