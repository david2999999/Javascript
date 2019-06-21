// The propertyName argument is accessible from the inner function
// and is used with bracket notation to retrieve the value of the given property. Once the property
// values are retrieved, a simple comparison can be done. This function can be used as in the following
// example:
var data = [{name: “Zachary”, age: 28}, {name: “Nicholas”, age: 29}];

data.sort(createComparisonFunction(“name”));
alert(data[0].name); //Nicholas

data.sort(createComparisonFunction(“age”));
alert(data[0].name); //Zachary