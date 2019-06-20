// const myAge = 27;
// let message;
// message = myAge >= 18 ? 'You can vote': 'You can not vote';
// console.log(message);

const myAge = 20;
const showPage = () => {
    return 'Showing the Page';
};

const showErrorPage = () => {
    return 'Showing the error Page';
};

const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ['Tyler', 'Porter', 'Andrew', 'Ben', 'Mike'];

console.log(team.length <= 4 ? `Team Size ${team.length}` : 'Too many people in the team');