let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
};

let getSummary = function (book) {
    return {
        summary : `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
};

let bookSummary = getSummary(myBook);
console.log(bookSummary.pageCountSummary);

let otherBookSummary = getSummary(otherBook);
console.log(otherBookSummary.summary);


// challenge area

// let fahrenheit = 32;
//
// let celcius = (fahrenheit - 32)  * 5 / 9;
// let kelvin = (fahrenheit + 459.67) * 5 / 9;

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit : fahrenheit,
        kelvin : (fahrenheit + 459.67) * 5 / 9,
        celsius: (fahrenheit - 32)  * 5 / 9
    }
};

let conversion = convertFahrenheit(74);
console.log(conversion);













