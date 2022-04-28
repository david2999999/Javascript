const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const me = new Person('hello', 'qwer', 100);
me.firstName = 'new first name';
console.log(me);

const person2 = new Person('Clancy', 'Turner', 12);
console.log(person2);