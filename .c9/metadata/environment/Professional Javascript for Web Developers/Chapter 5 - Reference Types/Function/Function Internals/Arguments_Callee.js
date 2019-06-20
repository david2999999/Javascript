{"filter":false,"title":"Arguments_Callee.js","tooltip":"/Professional Javascript for Web Developers/Chapter 5 - Reference Types/Function/Function Internals/Arguments_Callee.js","undoManager":{"mark":9,"position":9,"stack":[[{"start":{"row":0,"column":0},"end":{"row":22,"column":1},"action":"insert","lines":["Two special objects exist inside a function: arguments and this. The arguments object, as","discussed in Chapter 3, is an array-like object that contains all of the arguments that were passed","into the function. Though its primary use is to represent function arguments, the arguments object","also has a property named callee, which is a pointer to the function that owns the arguments","object. Consider the following classic factorial function:","function factorial(num){","if (num <= 1) {","return 1;","} else {","return num * factorial(num-1)","}","}","Factorial functions are typically defi ned to be recursive, as in this example, which works fi ne","when the name of the function is set and won’t be changed. However, the proper execution of this","function is tightly coupled with the function name “factorial”. It can be decoupled by using","arguments.callee as follows:","function factorial(num){","if (num <= 1) {","return 1;","} else {","return num * arguments.callee(num-1)","}","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "],"id":3},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "],"id":4}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "],"id":5}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "],"id":6},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":1},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":7}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "],"id":8},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":8},"action":"insert","lines":["    "],"id":9}],[{"start":{"row":19,"column":4},"end":{"row":19,"column":8},"action":"insert","lines":["    "],"id":10}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":42},"end":{"row":15,"column":42},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1559134135674,"hash":"96011dc99eabb714c138aba39304887dd43dbdb9"}