{"filter":false,"title":"DynamicPrototype.js","tooltip":"/Professional Javascript for Web Developers PDF/Chapter 6 - Object Oriented Programming/Dynamic Prototype Pattern/DynamicPrototype.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":5,"column":47},"action":"insert","lines":["Developers coming from other OO languages may fi nd the visual separation between the","constructor and the prototype confusing. The dynamic prototype pattern seeks to solve this problem","by encapsulating all of the information within the constructor while maintaining the benefi ts of","using both a constructor and a prototype by initializing the prototype inside the constructor, but","only if it is needed. You can determine if the prototype needs to be initialized by checking for the","existence of a method that should be available."],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":5,"column":50},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":14,"column":38},"action":"insert","lines":["function Person(name, age, job){","//properties","this.name = name;","this.age = age;","this.job = job;","//methods","if (typeof this.sayName != “function”){","Person.prototype.sayName = function(){"],"id":5}],[{"start":{"row":14,"column":38},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":15,"column":4},"end":{"row":20,"column":17},"action":"insert","lines":["alert(this.name);","};","}","}","var friend = new Person(“Nicholas”, 29, “Software Engineer”);","friend.sayName();"],"id":7}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "],"id":8},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "],"id":9},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":19},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":17},"end":{"row":21,"column":17},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560943221008,"hash":"03ac85f39f45810e678414ab54f8e7395cb7f1a7"}