var book = {};

// Since there’s a high likelihood that you’ll need to defi ne more than one property on an object,
// ECMAScript 5 provides the Object.defineProperties() method. This method allows you to
// defi ne multiple properties using descriptors at once. There are two arguments: the object on which
// to add or modify the properties and an object whose property names correspond to the properties’
// names to add or modify
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