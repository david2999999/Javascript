var david = {
    name : "David",
    yearOfBirth: 1992,
    job: "teacher"
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // this.calculateAge = function () {
    //     console.log(2018 - this.yearOfBirth);
    // }
};

Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var tim = new Person("tim", 1992, "Student");
var jane = new Person("Jane", 1912, "Retired");
var mark = new Person("Mark", 1998, "designer");

tim.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(tim.lastName);
console.log(jane.lastName);
console.log(mark.lastName);



