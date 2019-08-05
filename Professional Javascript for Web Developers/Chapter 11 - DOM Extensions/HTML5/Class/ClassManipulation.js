// In class name manipulation, the className property is used to add, remove, and replace class
// names. Since className contains a single string, it’s necessary to set its value every time a change
// needs to take place, even if there are parts of the string that should be unaffected. For example,
// consider the following HTML code:

// <div class='bd user disabled'>...</div>

// This <div> element has three classes assigned. To remove one of these classes, you need to split
// the class attribute into individual classes, remove the unwanted class, and then create a string
// containing the remaining classes.
//remove the 'user' class

//first, get list of class names
var classNames = div.className.split(/\s+/);
//find the class name to remove
var pos = -1,
    i,
    len;
for (i=0, len=classNames.length; i < len; i++){
    if (classNames[i] == 'user'){
        pos = i;
        break;
    }
}
//remove the class name
classNames.splice(i,1);
//set back the class name
div.className = classNames.join(' ');