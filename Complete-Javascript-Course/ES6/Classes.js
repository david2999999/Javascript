var Person5 = function (name, yearOfbirth, job) {
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.job = job
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfbirth;
  console.log(age);
};

var david = new Person5('David', 1990, 'Student');


//ES6

class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting(){
        console.log("hello");
    }
}

const david6 = new Person6('David', 1990,'Student');
david6.calculateAge();

Person6.greeting();











