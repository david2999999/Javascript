// The prototype pattern is important not just for defi ning custom types but also because it is the
// pattern used to implement all of the native reference types. Each of these (including Object, Array,
// String, and so on) has its methods defi ned on the constructor’s prototype. For instance, the sort()
// method can be found on Array.prototype, and substring() can be found on String.prototype,
// as shown here:
alert(typeof Array.prototype.sort); //”function”
alert(typeof String.prototype.substring); //”function”

// Through native object prototypes, it’s possible to get references to all of the default methods and to
// defi ne new methods. Native object prototypes can be modifi ed just like custom object prototypes,
// so methods can be added at any time. For example, the following code adds a method called
// startsWith() to the String primitive wrapper:
String.prototype.startsWith = function (text) {
    return this.indexOf(text) == 0;
};
var msg = “Hello world!”;
alert(msg.startsWith(“Hello”)); //true