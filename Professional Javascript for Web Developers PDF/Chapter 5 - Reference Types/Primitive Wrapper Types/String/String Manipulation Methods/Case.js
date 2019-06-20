// The next set of methods involves case conversion. Four methods perform case conversion:
// toLowerCase(), toLocaleLowerCase(), toUpperCase(), and toLocaleUpperCase().
// The toLowerCase() and toUpperCase() methods are the original methods, modeled after the
// same methods in java.lang.String. The toLocaleLowerCase() and toLocaleUpperCase()
// methods are intended to be implemented based on a particular locale. In many locales, the
// locale-specifi c methods are identical to the generic ones; however, a few languages (such as Turkish)
// apply special rules to Unicode case conversion, and this necessitates using the locale-specifi c
// methods for proper conversion.
var stringValue = “hello world”;
alert(stringValue.toLocaleUpperCase()); //”HELLO WORLD”
alert(stringValue.toUpperCase()); //”HELLO WORLD”
alert(stringValue.toLocaleLowerCase()); //”hello world”
alert(stringValue.toLowerCase()); //”hello world”