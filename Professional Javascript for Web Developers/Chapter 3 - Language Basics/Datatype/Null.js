// The Null type is the second data type that has only one value: the special value null. Logically,
// a null value is an empty object pointer, which is why typeof returns “object” when it’s passed a
// null value
var car = null;
alert(typeof car); //”object”

if (car != null){
    //do something with car
}


// Even though null and undefined are related, they have very different uses. As mentioned
// previously, you should never explicitly set the value of a variable to undefined, but the same
// does not hold true for null. Any time an object is expected but is not available, null should be
// used in its place. This helps to keep the paradigm of null as an empty object pointer and further
// differentiates it from undefined.
alert(null == undefined); //true