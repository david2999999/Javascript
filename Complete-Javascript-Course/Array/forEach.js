function doubleValues(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        newArr.push(val * 2);
    });

    return newArr;
}

function onlyEvenValues(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        if(val % 2 === 0)
            newArr.push(val);
    });

    return newArr;
}

function showFirstandLast(arr) {
    var newArr = [];
    arr.forEach(function (val) {
        newArr.push(val[0] + val[val.length - 1]);
    });

    return newArr;
}

function addKeyandValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value;
    });

    return arr;
}

function vowelCount(str) {
    var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function (letter) {
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter in obj){
                obj[letter]++;
            }else{
                obj[letter] = 1;
            }
        }
    });

    return obj;
}












