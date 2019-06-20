{"filter":false,"title":"Get-Set.js","tooltip":"/Professional Javascript for Web Developers PDF/Chapter 6 - Object Oriented Programming/Accessor Properties/Get-Set.js","undoManager":{"mark":15,"position":15,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":24},"action":"insert","lines":["var book = {","_year: 2004,","edition: 1","};","Object.defineProperty(book, “year”, {","get: function(){","return this._year;","},","set: function(newValue){","if (newValue > 2004) {","this._year = newValue;","this.edition += newValue - 2004;","}","}","});","book.year = 2005;","alert(book.edition); //2"],"id":1}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "],"id":2},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"insert","lines":["    "],"id":3}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "],"id":4},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "],"id":5},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":3,"column":2},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"insert","lines":["    "],"id":7},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":8,"column":10},"action":"insert","lines":["[[Configurable]] — Indicates if the property may be redefi ned by removing the property","via delete, changing the property’s attributes, or changing the property into a data","property. By default, this is true for all properties defi ned directly on an object.","[[Enumerable]] — Indicates if the property will be returned in a for-in loop. By default,","this is true for all properties defi ned directly on an object.","[[Get]] — The function to call when the property is read from. The default value is","undefined.","[[Set]] — The function to call when the property is written to. The default value is","undefined."],"id":9}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":10},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":6,"column":13},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":4,"column":66},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":12}],[{"start":{"row":2,"column":88},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":13}],[{"start":{"row":30,"column":24},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":32,"column":0},"end":{"row":38,"column":45},"action":"insert","lines":["In this code, an object book is created with two default properties: _year and edition. The","underscore on _year is a common notation to indicate that a property is not intended to be accessed","from outside of the object’s methods. The year property is defi ned to be an accessor property","where the getter function simply returns the value of _year and the setter does some calculation","to determine the correct edition. So changing the year property to 2005 results in both _year and","edition changing to 2. This is a typical use case for accessor properties, when setting a property","value results in some other changes to occur."],"id":15}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["// "],"id":16},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["// "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":3},"action":"insert","lines":["// "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["// "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["// "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["// "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["// "]}]]},"ace":{"folds":[],"scrolltop":394,"scrollleft":0,"selection":{"start":{"row":38,"column":48},"end":{"row":38,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560514712940,"hash":"51c314478dba26124fafabe51a1f054484989e08"}