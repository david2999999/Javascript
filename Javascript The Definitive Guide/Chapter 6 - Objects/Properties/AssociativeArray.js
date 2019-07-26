// On the other hand, when you access a property of an object with the [] array notation,
// the name of the property is expressed as a string. Strings are JavaScript datatypes, so
// they can be manipulated and created while a program is running

var addr = "";
for(i = 0; i < 4; i++) {
    addr += customer["address" + i] + '\n';
}

//This code reads and concatenates the address0, address1, address2, and address3
// properties of the customer object.