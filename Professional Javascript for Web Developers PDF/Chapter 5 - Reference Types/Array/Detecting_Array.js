if (value instanceof Array){
    //do something on the array
}

// The one problem with instanceof is that it assumes a single global execution context. If you are
// dealing with multiple frames in a web page, you’re really dealing with two distinct global execution
// contexts and therefore two versions of the Array constructor. If you were to pass an array from one
// frame into a second frame, that array has a different constructor function than an array created
// natively in the second frame.
// To work around this problem, ECMAScript 5 introduced the Array.isArray() method. The
// purpose of this method is to defi nitively determine if a given value is an array regardless of the
// global execution context in which it was created

if (Array.isArray(value)){
    //do something on the array
}