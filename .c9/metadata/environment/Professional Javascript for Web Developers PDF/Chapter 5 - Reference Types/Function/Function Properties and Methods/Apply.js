{"filter":false,"title":"Apply.js","tooltip":"/Professional Javascript for Web Developers/Chapter 5 - Reference Types/Function/Function Properties and Methods/Apply.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":30},"end":{"row":11,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"7abc651b363acbe781ecb0a4c6a30f718e2e6889","undoManager":{"mark":11,"position":11,"stack":[[{"start":{"row":0,"column":0},"end":{"row":4,"column":21},"action":"insert","lines":["There are two additional methods for functions: apply() and call(). These methods both call","the function with a specifi c this value, effectively setting the value of the this object inside the","function body. The apply() method accepts two arguments: the value of this inside the function","and an array of arguments. This second argument may be an instance of Array, but it can also be","the arguments object."],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":4,"column":24},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":17,"column":28},"action":"insert","lines":["function sum(num1, num2){","return num1 + num2;","}","function callSum1(num1, num2){","return sum.apply(this, arguments); //passing in arguments object","}","function callSum2(num1, num2){","return sum.apply(this, [num1, num2]); //passing in array","}","alert(callSum1(10,10)); //20","alert(callSum2(10,10)); //20"],"id":4}],[{"start":{"row":12,"column":1},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":9,"column":1},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "],"id":7}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "],"id":8}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "],"id":9}],[{"start":{"row":19,"column":28},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":21,"column":0},"end":{"row":23,"column":99},"action":"insert","lines":["In this example, callSum1() executes the sum() method, passing in this as the this value (which","is equal to window because it’s being called in the global scope) and also passing in the arguments","object. The callSum2() method also calls sum(), but it passes in an array of the arguments instead."],"id":11}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["// "],"id":12},{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["// "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"insert","lines":["// "]}]]},"timestamp":1559302215256}