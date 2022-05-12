let book1 = {
    title: 1984,
    author: 'George Orwell',
    pageCount: 326
};

let book2 = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
    }
};

console.log(getSummary(book1));
console.log(getSummary(book2));

let convertFahrenheit = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32) * 5 / 9
    }
};

console.log(convertFahrenheit(74));


