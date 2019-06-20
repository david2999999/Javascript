// any function call that is not a method, the "this" will point
// to the window object. If the function is a method, the "this"
// keyword will point to the object itself

// function thisKeyword() {
//     console.log(this);
// }
//
// thisKeyword();
//
var josh = {
    name: "josh",
    yearOfbirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2018 - this.yearOfbirth);

        function innerfunction() {
            console.log(this);
        }

        innerfunction();            // this will print out window object
    }
}

// josh.calculateAge();

var mike = {
    name: 'Mike',
    yearOfbirth: 1984
};

mike.calculateAge = josh.calculateAge;
mike.calculateAge();

