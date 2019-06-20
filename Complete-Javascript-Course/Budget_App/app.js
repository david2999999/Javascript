var budgetController = (function () {

    // creating a function constructor for the Expense object
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    // a method to calculate the percentage of the expenses
    Expense.prototype.calcPercentage = function (totalIncome) {
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }else {
            this.percentage = -1;
        }
    };

    // a method to get the percentages of the expenses
    // prototype allows the method to be visible for all of the instances of the object
    Expense.prototype.getPercentage = function () {
      return this.percentage;
    };

    // creating a function constructor for the Income object
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // calculating the total expense and income
    var calculateTotal= function (type) {
      var sum = 0;
      data.allItems[type].forEach(function (cur) {
         sum += cur.value;
      });

      data.totals[type] = sum;
    };

    // an object containing all of the budget details
    var data = {
        allItems: {
            exp: [],       // containing an array for all of the expenses
            inc: []         // containing an array for all of the income
        },

        totals:{
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1  // initial value of expense set to -1
    };

    // create a ID generator using closure
    // closures allow the id variable to be hidden
    // the inner function still has access to the property in the outer function
    // even if the outer function is already returned
    function idGen( start ) {
        var id = start;
        return function() {
            return id++;
        }
    }
    // starting value of the ID starts with 0
    var idGenerator = idGen(0);

    // returns an object containing methods to be used for controller
    return {
        // adding expenses or income into the data array depending on the type
        addItem: function (type, des, val) {
            var newItem, IDexpense, IDincome ;

            //create new item based on the "inc" or "exp" type
            if(type === 'exp'){
                // generates the next ID
                IDexpense = idGenerator();
                newItem = new Expense(IDexpense, des, val);

            }else if(type === 'inc'){
                // generates the next ID
                IDincome = idGenerator();
                newItem = new Income(IDincome, des, val);
            }

            // push in into our data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;

        },

        calculateBudget: function () {

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // calculate the budget: income - expense
            data.budget = data.totals.inc - data.totals.exp;

            // calculate the percentage of income that we spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }

        },

        // deleting items from data structure based on type and id
        deleteItem: function (type, id) {
            var ids , index;

            // returning an array that contain all of the ids
            ids = data.allItems[type].map(function (current) {
                return current.id;
            });

            // finding the index of the id
            index = ids.indexOf(id);

            // if the id is found. remove it from the array.
            // splice goes to the index and removes 1 element
            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }
        },

        calculatePercentages: function () {

            // loops through the array and calculate the percentage
            // the percentage will be set inside the object property
            data.allItems.exp.forEach(function (cur) {
               cur.calcPercentage(data.totals.inc);
            });
        },

        // returns an array of all of the percentages in the expense array
        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function (cur) {
               return cur.getPercentage();
            });

            return allPerc;
        },

        // returns an object containing values inside the data structure
        getBudget: function () {
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        // a function that can be used for testing values inside data
        testing: function () {
            console.log(data);
        }
    }
})();

// UI Controller, which takes care of all of the DOM Strings
var UIController = (function () {

    // an object containing all of the DOMStrings
    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue:     '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };


    // format the numbers with commas for every thousand
    var formatNumber = function (num, type) {
        var numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2);

        // split the number into an array
        // 0th index contains integer value
        // 1th index contains decimal value
        numSplit = num.split('.');

        // get the integer part
        int = numSplit[0];
        // get the decimal part
        dec = numSplit[1];


        // number formatter with comma
        var numberWithCommas = function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        // passing the integer part to be converted
        int = numberWithCommas(int);

        // returning a string of the format number
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };

    // defines a function that loops through an list
    // and uses a callback function for each of the elements
    var nodeListForEach = function (list , callback) {
        for(var i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };

    // returns an object containing methods for the UI controller
    return {
        // get all of the inputs from the form
        getInput: function(){
            return {
                type: document.querySelector(DOMString.inputType).value,
                description: document.querySelector(DOMString.inputDescription).value,
                value: parseFloat(document.querySelector(DOMString.inputValue).value)
            };
        },

        // adding an item to the list, the type chooses between expense and income
        addListItem: function (obj, type) {
            var html, newHtml, element;

            // choosing between the html template and also the container
            // to insert the template
            if(type === 'inc'){
                element = DOMString.incomeContainer;
                html= '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div>\n' +
                    '<div class="right clearfix">\n' +
                    '<div class="item__value"> %value%</div>\n' +
                    '<div class="item__delete">\n<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '</div>'
            }else if(type === 'exp'){
                element = DOMString.expenseContainer;
                html='<div class="item clearfix" id="exp-%id%">\n' +
                    '<div class="item__description">%description%</div>\n' +
                    '<div class="right clearfix">\n' +
                    '<div class="item__value"> %value%</div>\n' +
                    '<div class="item__percentage">21%</div>\n' +
                    '<div class="item__delete">\n' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '</div>'
            }

            // replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // insert the element into the dom
            // "beforeend" is "Just inside the element, after its last child."
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        // deleting the item using its ID
        deleteListItem: function (selectorID) {

            // retrieve the element by ID and remove the child
            var el = document.getElementById(selectorID);
            // calls the parent node to remove the child
            el.parentNode.removeChild(el);

        },

        // clearing all of the fields
        // this is used after the user has enter his/her data
        clearFields: function(){
            var fields, fieldsArr;

            // selects the description field and the input field
            // querySelectorAll returns a list
            fields = document.querySelectorAll(DOMString.inputDescription + ', ' + DOMString.inputValue);

            //converts the list into and array using slice
            // then pass in the list to be converted
            // the description is at index 0
            // the input value is at index 1
            fieldsArr = Array.prototype.slice.call(fields);

            // for each of the fields, set the values to empty string
            fieldsArr.forEach(function (current) {
               current.value = "";
            });

            // return the focus back to the description area field
            fieldsArr[0].focus();
        },

        // display all of the UI
        displayBudget: function (obj) {
            var type;

            // this is used to determine the negative or positive sign on the budget
            obj.budget >= 0 ? type = 'inc' : type = 'exp';

            // displays the budget, total income and total expense
            document.querySelector(DOMString.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMString.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMString.expenseLabel).textContent = obj.totalExp;


            // if the percentage is the expenses is above 0, display the percentage sign
            if(obj.percentage > 0){
                document.querySelector(DOMString.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMString.percentageLabel).textContent = '---';
            }


        },

        // displaying the percentages for each of the expenses that are inserted to the array
        displayPercentage: function (percentages) {

            // getting all the percent labels
            var fields = document.querySelectorAll(DOMString.expensesPercLabel);

            // accessing each individual element in the fields
            // checks each of percentages are greater than 0 and less 100
            // then add the value of percentage onto the UI
            nodeListForEach(fields, function (current, index) {
               if(percentages[index] > 0 && percentages[index] <= 100 ){
                   current.textContent = percentages[index] + '%';
               }else{
                   current.textContent = '---';
               }
            });
        },

        displayMonth: function () {
            var now, months, month, year;

            // create a new date
            now = new Date();

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'
                        , 'October', 'November', 'December'];

            // retrieve the month
            month = now.getMonth();

            // retrieve the year
            year = now.getFullYear();

            document.querySelector(DOMString.dateLabel).textContent = months[month] + ' ' +  year;

        },

        changedType: function () {

            var fields = document.querySelectorAll(
                DOMString.inputType + ',' +
                DOMString.inputDescription + ',' +
                DOMString.inputValue
            );

            nodeListForEach(fields, function (cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMString.inputBtn).classList.toggle('red');

        },

        // pass the array of DOMString
        getDOMString: function () {
            return DOMString;
        }
    }
})();

// a controller that makes the interaction between the UIController and BudgetController
var controller = (function (budgetCtrl, UICtrl) {

    // create all of the listeners
    // retrieve all of the DOMStrings from the UIController
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMString();

        // give an event listener to the button
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // add event listener to listen for the enter key
        document.addEventListener('keypress', function (event) {
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });

        // add an event listener to delete items
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

    var updateBudget = function () {
      // calculate the budget
        budgetCtrl.calculateBudget();

      // return the budget
        var budget = budgetCtrl.getBudget();

      // display the budget on the UI
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function () {

        // calculate percentages
        budgetCtrl.calculatePercentages();

        // read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // update the UI with the new percentages
        UICtrl.displayPercentage(percentages);
    };

    var ctrlAddItem = function() {
        // get the field input data
        var input = UICtrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            // add the item to the budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // clear the fields
            UICtrl.clearFields();

            // calculate and update budget
            updateBudget();

            // calculate and update the percentage
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;

        // retrieve the parent node of the ("delete" - x) button
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        // retrieve the type and id of the element
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
        }

        // delete the item from the data structure
        budgetCtrl.deleteItem(type, ID);

        // delete the item from the UI
        UICtrl.deleteListItem(itemID);

        // update and show the new budget
        updateBudget();

        // calculate and update the percentage
        updatePercentages();
    };

    return {
        // an initialization function to convert all values on the
        // UI to 0
        init: function () {
            console.log("Application has started");
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
            UICtrl.displayMonth();
        }
    }
})(budgetController, UIController);

controller.init();














