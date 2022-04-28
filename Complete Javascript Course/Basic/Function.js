function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJosh = calculateAge(1990);
var ageMike = calculateAge(1950);
var ageMary = calculateAge(1923);

function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement >= 0){
        console.log(name + " retires in " + retirement + " years.");
    }else{
        console.log(name + " has already retired");
    }
}


yearsUntilRetirement("Josh", 1990);
yearsUntilRetirement("Mike", 1921);
yearsUntilRetirement("Mary", 1923);