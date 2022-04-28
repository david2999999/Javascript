let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
};

let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
};

console.log(newHouse);

const person = {
    name: 'Louis',
    age: 27
};

const location = {
    city: 'Philadelphia',
    country: 'USA'
};

const overview = {
    ...person,
    ...location
};

console.log(overview);