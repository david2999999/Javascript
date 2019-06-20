var personProto  = {
    calculateAge: function () {
        console.log(2018 - this.yearOfBirth);
    }
};

var david = Object.create(personProto);
david.name = "david";
david.yearOfBirth = 1920;
david.job = "Student";

var jane = Object.create(personProto,
    {
       name: {value : "jane"},
       yearOfBirth : {value : 1923},
        job : {value : "Teacher"}
    });