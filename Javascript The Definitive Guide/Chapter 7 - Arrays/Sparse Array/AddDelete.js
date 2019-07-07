// You can also use the push() method to add one or more values to the end of an array:
a = []; // Start with an empty array
a.push("zero") // Add a value at the end. a = ["zero"]
a.push("one", "two") // Add two more values. a = ["zero", "one", "two"]

// Pushing a value onto an array a is the same as assigning the value to a[a.length]. You
// can use the unshift() method (described in §7.8) to insert a value at the beginning of
// an array, shifting the existing array elements to higher indexes.

// You can delete array elements with the delete operator, just as you can delete object
// properties:
a = [1,2,3];
delete a[1]; // a now has no element at index 1
1 in a // => false: no array index 1 is defined
a.length // => 3: delete does not affect array length

// Deleting an array element is similar to (but subtly different than) assigning undefined
// to that element. Note that using delete on an array element does not alter the length
// property and does not shift elements with higher indexes down to fill in the gap that is
// left by the deleted property. If you delete an element from an array, the array becomes
// sparse.

// As we saw above, you can also delete elements from the end of an array simply by setting
// the length property to the new desired length. Arrays have a pop() method (it works
// with push()) that reduces the length of an array by 1 but also returns the value of the
// deleted element. There is also a shift() method (which goes with unshift()) to remove
// an element from the beginning of an array. Unlike delete, the shift() method shifts
// all elements down to an index one lower than their current index. pop() and shift()
// are covered in §7.8 and in the reference section.