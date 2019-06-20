var divs = document.getElementsByTagName('div');

var divsArray = [].slice.call(divs);

divsArray.filter(function (val) {
    return val.innerText === "hello";
});