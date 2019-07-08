// In ECMAScript 5 (and in many recent browser implementations—including IE8—
// prior to ECMAScript 5), strings behave like read-only arrays. Instead of accessing individual
// characters with the charAt() method, you can use square brackets:
var s = test;
s.charAt(0) // => "t"
s[1] // => "e"

// The primary benefit of indexable strings is simply that we can replace calls to
// charAt() with square brackets, which are more concise and readable, and potentially
// more efficient. The fact that strings behave like arrays also means, however, that we
// can apply generic array methods to them.
s = "JavaScript"
Array.prototype.join.call(s, " ") // => "J a v a S c r i p t"
Array.prototype.filter.call(s, // Filter the characters of the string
    function(x) {
        return x.match(/[^aeiou]/); // Only match nonvowels
    }).join("")