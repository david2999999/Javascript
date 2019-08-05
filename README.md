## Javascript
When JavaScript fi rst appeared in 1995, its main purpose was to handle some of the input
validation that had previously been left to server-side languages such as Perl. Prior to that
time, a round-trip to the server was needed to determine if a required fi eld had been left
blank or an entered value was invalid. Netscape Navigator sought to change that with the
introduction of JavaScript. The capability to handle some basic validation on the client was an
exciting new feature at a time when use of telephone modems was widespread. The associated
slow speeds turned every trip to the server into an exercise in patience.
Since that time, JavaScript has grown into an important feature of every major web browser
on the market. No longer bound to simple data validation, JavaScript now interacts with
nearly all aspects of the browser window and its contents. JavaScript is recognized as a full
programming language, capable of complex calculations and interactions, including closures,
anonymous (lambda) functions, and even metaprogramming. JavaScript has become such an
important part of the Web that even alternative browsers, including those on mobile phones
and those designed for users with disabilities, support it. Even Microsoft, with its own clientside
scripting language called VBScript, ended up including its own JavaScript implementation
in Internet Explorer from its earliest version.
The rise of JavaScript from a simple input validator to a powerful programming language
could not have been predicted. JavaScript is at once a very simple and very complicated
language that takes minutes to learn but years to master. To begin down the path to using
JavaScript’s full potential, it is important to understand its nature, history, and limitations.
### Avoid Global Variables
* Minimize the use of global variables.

* This includes all data types, objects, and functions.

* Global variables and functions can be overwritten by other scripts.

* Use local variables instead, and learn how to use closures.

### Prototypes
When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) which has a constructor property by default. The constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using functionName.prototype.

### Private variable with closure
Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.
