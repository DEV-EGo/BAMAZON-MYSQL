var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "Bamazon_db"
});
// connection verification
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    connection.end();
});
// displaying items avaible to purchase inside the database
function startup() {
    connection.query('SELECT Item_ID , Product_name, Price FROM Products', function (err, res) {
        if (err) throw err;
        res.forEach(function (item) {
            console.log("ID: ${ item.Item_id } ,Product: ${ item.Product_name }, Price: ${ item.Price } ----")
        })
        StartupPrompt();
    });
};

// area where customer would answer questions from prompt
function StartupPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "Item_ID",
            message: "enter the item you would like to buy",
        },
        {
            type: "input",
            name: "Quantity",
            message: "How many would you want to purchase?"
        }
    ]).then(function (customerResponse) {
        connection.query('SELECT * FROM Products WHERE Item_ID=${customerResponse.Item_ID}',
            function (err, res) {
                if (err) throw err;
                // checking to see if stock is available
                if ((customerResponse.quantity - res[0].Stock_quantity) <= 0) {
                    // if we have any stock left the c.data is pushed to make the purchase & update
                    Purchase(res[0], customerResponse);
                    // or ese customer is told were sold out
                } else {
                    console.log('sorry were sold out of ${res[0].Product_name}. please try another item.')
                    StartupPrompt();
                }
            })
    })
};

// update stock quantity
function purchase(res, customerResponse) {
    console.log('thank you for buying ${res.Product_name}. your total is $${res.Price * customerResponse.Quantity}')
    connection.query('UPDATE Products SET ? WHERE ?',
        [{
            Stock_quantity: res.Stock_quantity - customerResponse.quantity
        },
        {
            Item_ID: res.Item_ID
        }
        ]);
    endConnection();
}
// close connection
function endConnection() {
    connection.end();
};

// ========instructions==========
// create a Node application called bamazonCustomer.js. 
// Running this application will first display all of the items available for sale.
// Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.