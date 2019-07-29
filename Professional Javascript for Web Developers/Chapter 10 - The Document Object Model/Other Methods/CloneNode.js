var deepList = myList.cloneNode(true);
alert(deepList.childNodes.length); //3 (IE < 9) or 7 (others)

var shallowList = myList.cloneNode(false);
alert(shallowList.childNodes.length); //0

// In this example, deepList is fi lled with a deep copy of myList. This means deepList has three list
// items, each of which contains text. The variable shallowList contains a shallow copy of myList,
// so it has no child nodes. The difference in deepList.childNodes.length is due to the different
// ways that white space is handled in Internet Explorer 8 and earlier as compared to other browsers.
// Internet Explorer prior to version 9 did not create nodes for white space.