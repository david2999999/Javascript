function getvalue(portfolio) {
    var total = 0.0;
    for(stock in portfolio) { // For each stock in the portfolio:
        var shares = portfolio[stock]; // get the number of shares
        var price = getquote(stock); // look up share price
        total += shares * price; // add stock value to total value
    }
    return total; // Return total value.
}