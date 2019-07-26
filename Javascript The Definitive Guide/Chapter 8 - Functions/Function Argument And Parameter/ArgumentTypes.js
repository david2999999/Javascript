// JavaScript method parameters have no declared types, and no type checking is
// performed on the values you pass to a function. You can help to make your code selfdocumenting
// by choosing descriptive names for function arguments and also by including
// argument types in comments, as in the arraycopy() method just shown. For
// arguments that are optional, you can include the word “optional” in the comment. And
// when a method can accept any number of arguments, you can use an ellipsis:
// function max(/* number... */) { /* code here */ }

// As described in §3.8, JavaScript performs liberal type conversion as needed. So if you
// write a function that expects a string argument and then call that function with a value
// of some other type, the value you passed will simply be converted to a string when the
// function tries to use it as a string. All primitive types can be converted to strings, and
// all objects have toString() methods (if not necessarily useful ones), so an error never
// occurs in this case.

// This is not always true, however. Consider again the arraycopy() method shown earlier.
// It expects an array as its first argument. Any plausible implementation will fail if that
// first argument is anything but an array (or possibly an array-like object). Unless you
// are writing a “throwaway” function that will be called only once or twice, it may be
// worth adding code to check the types of arguments like this. It is better for a function
// to fail immediately and predictably when passed bad values than to begin executing
// and fail later with an error message that is likely to be unclear. Here is an example
// function that performs type-checking. Note that it uses the isArrayLike() function
// from §7.11:

// Return the sum of the elements of array (or array-like object) a.
// The elements of a must all be numbers or null and undefined are ignored.
function sum(a) {
    if (isArrayLike(a)) {
        var total = 0;
        for(var i = 0; i < a.length; i++) { // Loop though all elements
            var element = a[i];
            if (element == null) continue; // Skip null and undefined
            if (isFinite(element)) total += element;
            else throw new Error("sum(): elements must be finite numbers");
        }
        return total;
    }
    else throw new Error("sum(): argument must be array-like");
}