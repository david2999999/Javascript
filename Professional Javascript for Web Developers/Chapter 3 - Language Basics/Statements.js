// Even though a semicolon is not required at the end of statements, it is recommended to always
// include one. Including semicolons helps prevent errors of omission, such as not fi nishing what you
// were typing, and allows developers to compress ECMAScript code by removing extra white space
// (such compression causes syntax errors when lines do not end in a semicolon). Including semicolons
// also improves performance in certain situations, because parsers try to correct syntax errors by
// inserting semicolons where they appear to belong.

var sum = a + b //valid even without a semicolon - not recommended
var diff = a - b; //valid - preferred

if (test){
    test = false;
    alert(test);
}

// Using code blocks for control statements makes the intent clearer, and there’s less chance for errors
// when changes need to be made.
if (test)
    alert(test); //valid, but error-prone and should be avoided
    
if (test){ //preferred
    alert(test);
}