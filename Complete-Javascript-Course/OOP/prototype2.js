function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

Person.prototype.addToFamily = function (person) {
    if(this.family.indexOf(person) === -1 && person instanceof Person){
        this.family.push(person);
    }

    return this.family.length;
};

Array.prototype.map = function (callback) {
    var newArr = [];
    for(var i = 0 ; i < this.length; i++){
        newArr.push(callback(this[i], i , this));
    }

    return newArr;
};

String.prototype.reverse = function () {
    var newStr = '';
    for(var i = this.length - 1; i >= 0; i--){
        newStr += this[i];
    }

    return newStr;
};






















