{"filter":false,"title":"PrototypeChaining.js","tooltip":"/Professional Javascript for Web Developers PDF/Chapter 6 - Object Oriented Programming/Prototype Chaining/PrototypeChaining.js","undoManager":{"mark":19,"position":19,"stack":[[{"start":{"row":0,"column":0},"end":{"row":8,"column":41},"action":"insert","lines":["ECMA-262 describes prototype chaining as the primary method of inheritance in ECMAScript.","The basic idea is to use the concept of prototypes to inherit properties and methods between two","reference types. Recall the relationship between constructors, prototypes, and instances: each","constructor has a prototype object that points back to the constructor, and instances have an","internal pointer to the prototype. What if the prototype were actually an instance of another type?","That would mean the prototype itself would have a pointer to a different prototype that, in turn,","would have a pointer to another constructor. If that prototype were also an instance of another","type, then the pattern would continue, forming a chain between instances and prototypes. This is","the basic idea behind prototype chaining."],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":8,"column":44},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":10,"column":0},"end":{"row":25,"column":39},"action":"insert","lines":["function SuperType(){","this.property = true;","}","SuperType.prototype.getSuperValue = function(){","return this.property;","};","function SubType(){","this.subproperty = false;","}","//inherit from SuperType","SubType.prototype = new SuperType();","SubType.prototype.getSubValue = function (){","return this.subproperty;","};","var instance = new SubType();","alert(instance.getSuperValue()); //true"],"id":4}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "],"id":5}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "],"id":6}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "],"id":7}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "],"id":8}],[{"start":{"row":12,"column":1},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":16,"column":2},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":10}],[{"start":{"row":20,"column":1},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":26,"column":2},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":12}],[{"start":{"row":29,"column":39},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":31,"column":0},"end":{"row":33,"column":42},"action":"insert","lines":["alert(instance instanceof Object); //true","alert(instance instanceof SuperType); //true","alert(instance instanceof SubType); //true"],"id":14}],[{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":15}],[{"start":{"row":31,"column":0},"end":{"row":33,"column":30},"action":"insert","lines":["The relationship between prototypes and instances is discernible in two ways. The fi rst way is to use","the instanceof operator, which returns true whenever an instance is used with a constructor that","appears in its prototype chain"],"id":16}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["// "],"id":17},{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["// "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":36,"column":42},"end":{"row":37,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":37,"column":0},"end":{"row":38,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":38,"column":0},"end":{"row":43,"column":56},"action":"insert","lines":["The second way to determine this relationship is to use the isPrototypeOf() method. Each","prototype in the chain has access to this method, which returns true for an instance in the chain,","as in this example:","alert(Object.prototype.isPrototypeOf(instance)); //true","alert(SuperType.prototype.isPrototypeOf(instance)); //true","alert(SubType.prototype.isPrototypeOf(instance)); //true"],"id":19}],[{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["// "],"id":20},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"insert","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"insert","lines":["// "]}]]},"ace":{"folds":[],"scrolltop":237,"scrollleft":0,"selection":{"start":{"row":43,"column":56},"end":{"row":43,"column":56},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560945518470,"hash":"2c2cfc851e81042d291b31f62305f3df15752bbe"}