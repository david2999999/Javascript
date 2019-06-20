var obj1 = {
    name: "john",
    age : 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj2.age);
console.log(obj1.age);

// functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "New York"
};

function change(a, b) {
    a = 30;
    b.city = "san francisco";
}

change(age, obj);

console.log(age);
console.log(obj);