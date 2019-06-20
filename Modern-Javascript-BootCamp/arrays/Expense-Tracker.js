const account = {
    name: 'Dav',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function(description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount;
        });

        this.incomes.forEach(function (income) {
            totalIncome += income.amount;
        });
        
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalExpenses} in expenses and $${totalIncome} in income`;
    }
};

// Expenses -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses


account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.getAccountSummary());

// challenge
// add income array
// addIncome method -> description, amount
// tweak getAccountSummary

account.addIncome('Job', 1000);
console.log(account.getAccountSummary());