{"filter":false,"title":"RegExp.js","tooltip":"/Professional Javascript for Web Developers/Chapter 5 - Reference Types/RegExp/RegExp.js","undoManager":{"mark":14,"position":14,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":37},"action":"insert","lines":["ECMAScript supports regular expressions through the RegExp type. Regular expressions are easy","to create using syntax similar to Perl, as shown here:","var expression = /pattern/flags;","The pattern part of the expression can be any simple or complicated regular expression, including","character classes, quantifi ers, grouping, lookaheads, and backreferences. Each expression can have","zero or more fl ags indicating how the expression should behave. Three supported fl ags represent","matching modes, as follows:","g — Indicates global mode, meaning the pattern will be applied to all of the string instead","of stopping after the fi rst match is found.","i — Indicates case-insensitive mode, meaning the case of the pattern and the string are","ignored when determining matches.","m — Indicates multiline mode, meaning the pattern will continue looking for matches after","reaching the end of one line of text."],"id":1}],[{"start":{"row":10,"column":33},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":8,"column":44},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":6,"column":27},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":2,"column":32},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":1,"column":54},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "],"id":7},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":8},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":17,"column":40},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":19,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["/*","* Match all instances of “at” in a string.","*/","var pattern1 = /at/g;","/*"],"id":10}],[{"start":{"row":23,"column":1},"end":{"row":23,"column":2},"action":"remove","lines":["*"],"id":11},{"start":{"row":23,"column":0},"end":{"row":23,"column":1},"action":"remove","lines":["/"]},{"start":{"row":22,"column":21},"end":{"row":23,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":22,"column":21},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["/*"],"id":13}],[{"start":{"row":24,"column":2},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":14}],[{"start":{"row":25,"column":0},"end":{"row":31,"column":23},"action":"insert","lines":["* Match the first instance of “bat” or “cat”, regardless of case.","*/","var pattern2 = /[bc]at/i;","/*","* Match all three-character combinations ending with ”at”, regardless of case.","*/","var pattern3 = /.at/gi;"],"id":15}]]},"ace":{"folds":[],"scrolltop":328.5,"scrollleft":0,"selection":{"start":{"row":29,"column":44},"end":{"row":29,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1559129928221,"hash":"02698d45a6d2ee848cad51c53ddb0147cd8b4e62"}