// Methods and the this keyword are central to the object-oriented programming paradigm.
// Any function that is used as a method is effectively passed an implicit argument—
// the object through which it is invoked. Typically, a method performs some sort of
// operation on that object, and the method-invocation syntax is an elegant way to express
// the fact that a function is operating on an object. Compare the following two lines:
rect.setSize(width, height);
setRectSize(rect, width, height);

// The hypothetical functions invoked in these two lines of code may perform exactly the
// same operation on the (hypothetical) object rect, but the method-invocation syntax in
// the first line more clearly indicates the idea that it is the object rect that is the primary
// focus of the operation.