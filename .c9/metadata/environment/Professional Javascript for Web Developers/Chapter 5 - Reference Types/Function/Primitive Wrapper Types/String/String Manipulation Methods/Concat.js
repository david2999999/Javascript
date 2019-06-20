{"filter":false,"title":"Concat.js","tooltip":"/Professional Javascript for Web Developers/Chapter 5 - Reference Types/Function/Primitive Wrapper Types/String/String Manipulation Methods/Concat.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":11,"column":46},"action":"insert","lines":["Several methods manipulate the values of strings. The fi rst of these methods is concat(), which is","used to concatenate one or more strings to another, returning the concatenated string as the result.","Consider the following example:","var stringValue = “hello “;","var result = stringValue.concat(“world”);","alert(result); //”hello world”","alert(stringValue); //”hello”","The result of calling the concat() method on stringValue in this example is “hello world” — the","value of stringValue remains unchanged. The concat() method accepts any number of arguments,","so it can create a string from any number of other strings, as shown here:","var stringValue = “hello “;","var result = stringValue.concat(“world”, “!”);"],"id":1}],[{"start":{"row":11,"column":46},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":12,"column":0},"end":{"row":17,"column":17},"action":"insert","lines":["alert(result); //”hello world!”","alert(stringValue); //”hello”","This modifi ed example concatenates “world” and “!” to the end of “hello “. Although the","concat() method is provided for string concatenation, the addition operator (+) is used more often","and, in most cases, actually performs better than the concat() method even when concatenating","multiple strings."],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":4},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":6,"column":29},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "],"id":6},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"insert","lines":["// "],"id":7},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["// "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"remove","lines":[" "],"id":8}],[{"start":{"row":14,"column":29},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":9}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":27},"end":{"row":11,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1559305993468,"hash":"f10ef63693d4caa93622429b97a76c52b05ab67b"}