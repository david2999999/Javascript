// For each of these numeric types, you can specify a min attribute (the smallest possible value), a max
// attribute (the largest possible value), and a step attribute (the difference between individual steps
// along the scale from min to max). For instance, to allow only multiples of 5 between 0 and 100, you
// could use:

// <input type=”number” min=”0” max=”100” step=”5” name=”count”>

// Each of the attributes have corresponding properties on the element that are accessible (and
// changeable) using JavaScript. Additionally, there are two methods: stepUp() and stepDown().
// These methods each accept an optional argument: the number to either subtract or add from the
// current value. (By default, they increment or decrement by one.) The methods have not yet been
// implemented by browsers but will be usable as in this example
input.stepUp(); //increment by one
input.stepUp(5); //increment by five
input.stepDown(); //decrement by one
input.stepDown(10); //decrement by ten