//The list of style sheets available on the document is represented by the document.styleSheets
// collection. The number of style sheets on the document can be retrieved using the length property,
// and each individual style sheet can be accessed using either the item() method or bracket notation.
var sheet = null;
for (var i=0, len=document.styleSheets.length; i < len; i++){
    sheet = document.styleSheets[i];
    alert(sheet.href);
}

function getStyleSheet(element){
    return element.sheet || element.styleSheet;
}
//get the style sheet for the first <link/> element
var link = document.getElementsByTagName('link')[0];
var sheet = getStyleSheet(link);