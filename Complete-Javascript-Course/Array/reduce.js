function extractValue(arr, key) {
    return arr.reduce(function (acc, next) {
        acc.push(next[key]);
        return acc;
    }, []);
}

function vowelCount(str) {
    var vowels = "aeiou";

    return str.split("").reduce(function (acc, next) {
        if(vowels.indexOf(next.toLowerCase()) !== -1){
            if(next in acc){
                acc[next]++;
            }else{
                acc[next] = 1;
            }
        }

        return acc;
    }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function (acc , next , idx) {
        acc[idx][key] = value;
        return acc;
    }, acc);
}

function partition(arr, cb) {
    return arr.reduce(function (acc, next) {
        if(cb(next)){
            acc[0].push(next);
        }else{
            acc[1].push(next);
        }

        return acc;
    }, [[], []]);
}






















