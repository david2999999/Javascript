{"filter":false,"title":"Number.js","tooltip":"/Professional Javascript for Web Developers/Chapter 5 - Reference Types/Function/Primitive Wrapper Types/Number/Number.js","undoManager":{"mark":9,"position":9,"stack":[[{"start":{"row":0,"column":0},"end":{"row":2,"column":34},"action":"insert","lines":["The Number type is the reference type for numeric values. To create a Number object, use the Number","constructor and pass in any number. Here’s an example:","var numberObject = new Number(10);"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":2,"column":34},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":6,"column":0},"end":{"row":16,"column":30},"action":"insert","lines":["As with the Boolean type, the Number type overrides valueOf(), toLocaleString(), and","toString(). The valueOf() method returns the primitive numeric value represented by the object,","whereas the other two methods return the number as a string. As mentioned in Chapter 3, the","toString() method optionally accepts a single argument indicating the radix in which to represent","the number, as shown in the following examples:","var num = 10;","alert(num.toString()); //”10”","alert(num.toString(2)); //”1010”","alert(num.toString(8)); //”12”","alert(num.toString(10)); //”10”","alert(num.toString(16)); //”a”"],"id":4}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "],"id":5},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":16,"column":30},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""]},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":19,"column":0},"end":{"row":22,"column":32},"action":"insert","lines":["The toFixed() method returns a string representation of a number with a specifi ed number of","decimal points, as in this example:","var num = 10;","alert(num.toFixed(2)); //”10.00”"],"id":7}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["// "],"id":8},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":22,"column":32},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":29,"column":45},"action":"insert","lines":["var numberObject = new Number(10);","var numberValue = 10;","alert(typeof numberObject); //”object”","alert(typeof numberValue); //”number”","alert(numberObject instanceof Number); //true","alert(numberValue instanceof Number); //false"],"id":10}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":38},"end":{"row":20,"column":38},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1559304642780,"hash":"3836fc718ca004ad6718387388cc8c7946ac9e89"}