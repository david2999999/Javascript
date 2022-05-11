let book = {
    title: 1984,
    author: 'George Orwell',
    pageCount: 326
};

console.log(`${book.title} by ${book.author}`);

book.title = 'Animal Farm';

console.log(`${book.title} by ${book.author}`);

let me = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
};

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);

me.age = me.age + 1;

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);


