var names = ['Louis', 'Jeron', 'Malo'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'builder', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if(john.indexOf('teacher') === -1){
    console.log("John is NOT a teacher");
}