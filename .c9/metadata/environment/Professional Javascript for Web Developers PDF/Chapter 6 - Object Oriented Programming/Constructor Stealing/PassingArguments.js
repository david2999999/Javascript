{"filter":false,"title":"PassingArguments.js","tooltip":"/Professional Javascript for Web Developers PDF/Chapter 6 - Object Oriented Programming/Constructor Stealing/PassingArguments.js","undoManager":{"mark":5,"position":5,"stack":[[{"start":{"row":0,"column":0},"end":{"row":13,"column":25},"action":"insert","lines":["One advantage that constructor stealing offers over prototype chaining is the ability to pass arguments","into the supertype constructor from within the subtype constructor. Consider the following:","function SuperType(name){","this.name = name;","}","function SubType(){","//inherit from SuperType passing in an argument","SuperType.call(this, “Nicholas”);","//instance property","this.age = 29;","}","var instance = new SubType();","alert(instance.name); //”Nicholas”;","alert(instance.age); //29"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "],"id":3}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "],"id":4},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":1},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":4,"column":1},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":6}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":25},"end":{"row":15,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560947600523,"hash":"115b9be4067f33b7e5dbd1d24704673780cc6c60"}