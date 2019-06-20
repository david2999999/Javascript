const now = new Date();
const timeStamp = now.getTime();

const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());

// console.log(now.toDateString());
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of Month ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Second: ${now.getSeconds()}`);

const dateOne = new Date('March 1 2018 12:00:00');
const dateTwo = new Date();
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString());
}else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString());
}
