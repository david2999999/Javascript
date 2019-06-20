let isAccountLocked = true;
let userRole = 'admin';


if(isAccountLocked){
    console.log('Is account locked');
}else {
    console.log('welcome!');
}

if(isAccountLocked){
    console.log('Is account locked');
}else if(userRole === 'admiin'){
    console.log('Welcome admin');
}else {
    console.log('welcome');
}

// challenge

let temp = 45;

if(temp <= 32){
    console.log('it is freezing outside');
}else if (temp >= 110){
    console.log('It is hot outside');
}else {
    console.log('it is nice outside');
}
