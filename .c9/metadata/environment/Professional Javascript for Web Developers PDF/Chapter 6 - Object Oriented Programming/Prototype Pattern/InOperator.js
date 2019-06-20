{"filter":false,"title":"InOperator.js","tooltip":"/Professional Javascript for Web Developers PDF/Chapter 6 - Object Oriented Programming/Prototype Pattern/InOperator.js","undoManager":{"mark":11,"position":11,"stack":[[{"start":{"row":0,"column":0},"end":{"row":6,"column":26},"action":"insert","lines":["There are two ways to use the in operator: on its own or as a for-in loop. When used on its own, the","in operator returns true when a property of the given name is accessible by the object, which is to say","that the property may exist on the instance or on the prototype. Consider the following example:","function Person(){","}","Person.prototype.name = “Nicholas”;","Person.prototype.age = 29;"],"id":1}],[{"start":{"row":6,"column":26},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":7,"column":0},"end":{"row":25,"column":32},"action":"insert","lines":["Person.prototype.job = “Software Engineer”;","Person.prototype.sayName = function(){","alert(this.name);","};","var person1 = new Person();","var person2 = new Person();","alert(person1.hasOwnProperty(“name”)); //false","alert(“name” in person1); //true","person1.name = “Greg”;","alert(person1.name); //”Greg” - from instance","alert(person1.hasOwnProperty(“name”)); //true","alert(“name” in person1); //true","alert(person2.name); //”Nicholas” - from prototype","alert(person2.hasOwnProperty(“name”)); //false","alert(“name” in person2); //true","delete person1.name;","alert(person1.name); //”Nicholas” - from the prototype","alert(person1.hasOwnProperty(“name”)); //false","alert(“name” in person1); //true"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":4},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":3,"column":18},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":5}],[{"start":{"row":3,"column":19},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "],"id":7}],[{"start":{"row":10,"column":2},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":8}],[{"start":{"row":13,"column":27},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":16,"column":32},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":10}],[{"start":{"row":20,"column":45},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":25,"column":32},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":12}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":26,"column":0},"end":{"row":26,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560860605251,"hash":"d3ef14a065317cc6c621ff38b149c5849c2f0dbe"}