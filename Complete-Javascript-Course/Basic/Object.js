var david = {
    firstName: "David",
    lastName:   "Lian",
    yearOfBirth: 1929,
    job: "Student",
    isMarried: false
};

console.log(david.lastName);
console.log(david["lastName"]);

var xyz = 'job';
console.log(david[xyz]);

david.lastName = "Qwert";
david["job"] = "programmer";

console.log(david);



var jane = new Object();
jane.name = 'Jane';
jane.lastName = "Smith";
jane["yearOfbirth"] = 1948;
jane["job"] = "Teacher";
jane["isMarried"] = true;

console.log(jane);