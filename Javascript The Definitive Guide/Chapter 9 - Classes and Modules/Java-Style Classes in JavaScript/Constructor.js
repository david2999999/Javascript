function typeAndValue(x) {
    if (x == null) return ""; // Null and undefined don't have constructors
    switch(x.constructor) {
        case Number: return "Number: " + x; // Works for primitive types
        case String: return "String: '" + x + "'";
        case Date: return "Date: " + x; // And for built-in types
        case RegExp: return "Regexp: " + x;
        case Complex: return "Complex: " + x; // And for user-defined types
    }
}