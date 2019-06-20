let name = '  Louis Ju  ';

// length property
console.log(name.length);

// convert to uppercase
console.log(name.toUpperCase());

// convert to lowercase
console.log(name.toLowerCase());

//includes method
let password = 'abc123password098';
console.log(password.includes('password'));

// trim
console.log(name.trim());

// challenge

// isValidPassword
// length is more than 8 and it doesn't contain the word password

let isValidPassword = function(password) {
  return (password.length > 8 && !password.includes('password'));
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('asdjiasdjqwdqwd'));
console.log(isValidPassword('asdasdiqwjdpassword'));

















