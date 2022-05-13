let account = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
};

let addExpense = function (account, amount) {
    account.expenses += amount;
    console.log(account);
};

addExpense(account, 2.50);
console.log(account);