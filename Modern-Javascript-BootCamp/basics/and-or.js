let temp = 0;

// logical and operator - True if both sides are true. false otherwise
if(temp >= 60 && temp <= 90){
    console.log('it is pretty nice out');
}

// logical or operator
if (temp <= 0 || temp >= 120){
    console.log('do not go outside');
}

if(temp >= 60 && temp <= 90) {
    console.log('it is pretty nice outside');
}else if (temp <= 0 || temp >= 120){
    console.log('do not go outside');
}else {
    console.log('Do whatever u want');
}

// challenge area
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// are both vegan? offer up vegan dishes
// at least one vegan? make sure to offer up some vegan options
// else offer up anything on the menu

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('offer up vegan dishes');
}else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('make sure to offer up some vegan options');
}else {
    console.log('offer up anything on the menu');
}