{"filter":false,"title":"ProblemInPrototypeChain.js","tooltip":"/Professional Javascript for Web Developers PDF/Chapter 6 - Object Oriented Programming/Methods in Prototype Chain/ProblemInPrototypeChain.js","undoManager":{"mark":6,"position":6,"stack":[[{"start":{"row":0,"column":0},"end":{"row":5,"column":68},"action":"insert","lines":["Even though prototype chaining is a powerful tool for inheritance, it is not without its issues.","The major issue revolves around prototypes that contain reference values. Recall from earlier that","prototype properties containing reference values are shared with all instances; this is why properties","are typically defi ned within the constructor instead of on the prototype. When implementing","inheritance using prototypes, the prototype actually becomes an instance of another type, meaning","that what once were instance properties are now prototype properties"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":5,"column":71},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":18,"column":49},"action":"insert","lines":["function SuperType(){","this.colors = [“red”, “blue”, “green”];","}","function SubType(){","}","//inherit from SuperType","SubType.prototype = new SuperType();","var instance1 = new SubType();","instance1.colors.push(“black”);","alert(instance1.colors); //”red,blue,green,black”","var instance2 = new SubType();","alert(instance2.colors); //”red,blue,green,black”"],"id":4}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "],"id":5}],[{"start":{"row":16,"column":49},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":13,"column":36},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":7}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":0},"end":{"row":14,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560946580926,"hash":"60e305962b246631f0625314f9edadc5e7570d51"}