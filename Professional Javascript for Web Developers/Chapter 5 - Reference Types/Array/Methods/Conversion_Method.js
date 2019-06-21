var colors = [“red”, “blue”, “green”]; //creates an array with three strings
alert(colors.toString()); //red,blue,green
alert(colors.valueOf()); //red,blue,green
alert(colors); //red,blue,green


// The toLocaleString() method may end up returning the same value as toString() and
// valueOf(), but not always. When toLocaleString() is called on an array, it creates a commadelimited
// string of the array values. The only difference between this and the two other methods is
// that toLocaleString() calls each item’s toLocaleString() instead of toString() to get its string
// value.
var person1 = {
    toLocaleString : function () {
        return “Nikolaos”;
    },
    
    toString : function() {
        return “Nicholas”;
    }
};

var person2 = {
    toLocaleString : function () {
        return “Grigorios”;
    },
    toString : function() {
        return “Greg”;
    }
};

var people = [person1, person2];
alert(people); //Nicholas,Greg
alert(people.toString()); //Nicholas,Greg
alert(people.toLocaleString()); //Nikolaos,Grigorios