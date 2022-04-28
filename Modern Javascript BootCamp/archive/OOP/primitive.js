// string -> string.prototype -> object.prototype -> null
// number -> Number.prototype -> Object.prototype -> null
// boolean -> Boolean.prototype -> Object.prototype -> null
const product = 'Computer';
console.log(product);

const otherProduct = new String('Phone');
console.log(otherProduct);