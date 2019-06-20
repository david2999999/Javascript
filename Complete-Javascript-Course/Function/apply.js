function addNumbers(a,b,c,d) {
    return this.firstName + " just calculated " + (a+b+c+d);
}

var colt = {
    firstName: "Colt"
};

var elie = {
    firstName: "elie"
};

addNumbers.apply(elie, [1,2,3,4]);


//////////////////////////////////////

var nums = [5,6,7,8];
Math.max(nums); // NaN
Math.max.apply(this, nums); // 8

//////////////////////////////////////

function sumValues(a,b,c) {
    return a + b + c;
}

var values = [4,1,2];

sumValues(values); // undefined

sumValues.apply(this, values); // 7