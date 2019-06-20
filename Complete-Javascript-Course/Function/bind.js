function addNumbers(a,b,c,d) {
    return this.firstName + " just calculated " + (a + b + c + d);
}

var elie = {
    firstName: "Elie"
};

var elieCalc = addNumbers.bind(elie, 1, 2, 3 ,4);
elieCalc(); // Elie just calculated 10

var elieCalc2 = addNumbers.bind(elie, 1 , 2);
elieCalc2(3, 4); // Elie just calculated 10