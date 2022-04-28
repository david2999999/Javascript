const products = [{name: 'Computer Mouse'}];
const product = products[0];

// falsy values - false, 0, empty string, null, undefined

if (product) {
    console.log('Product found');
}else {
    console.log('Product Not found');
}