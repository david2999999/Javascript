//ES5
function SmithPerson5(firstName, yearOfbirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName ;
    nationality === undefined ? nationality = 'american' : nationality ;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfbirth;
    this.nationality = nationality;
}

var david = new SmithPerson5('david', 2019);
var emily = new SmithPerson5('Emily', 1983, 'Diaz', 'Spain');
console.log(david);
console.log(emily);


// ES6
function SmithPerson6(firstName, yearOfbirth, lastName = 'Smith', nationality = 'american') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfbirth;
    this.nationality = nationality;
}

var david6 = new SmithPerson6('david', 2019);
var emily6 = new SmithPerson6('Emily', 1983, 'Diaz', 'Spain');
console.log(david6);
console.log(emily6);
