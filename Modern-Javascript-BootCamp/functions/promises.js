// Call back
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data');
    }, 2000);
};

getDataCallback((err, data) => {
   if (err) {

   } else {
       console.log(data);
   }
});

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve(`This is a success data: ${data}`);
    }, 2000);
});

const myPromise = getDataPromise(123);

myPromise.then((data) => {
    // resolve
    console.log(data);
}, (err) => {
    // reject
    console.log(err);
});