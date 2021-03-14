const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_db',
});

// Write query functions to handle all possible requests from user
const queryAll = () => {
    const query = connection.query(
        'SELECT * FROM employees',
        (err, res) => {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        }
    );

    // Adding some context to the search
    console.log("See below for a full list of your employees!");
};

// Write initial prompt function to run when program is initiated
const initialPrompt = () => {
    inquirer
        .prompt([
            {
                type: "list", 
                message: "What would you like to do?",
                name: "initial", 
                choices: ["View All Employees", "View All Employees By Department", "View All Employees By Role", "Add Employee", "Add Department", "Add Role", "Update Employee Role", "Exit"],
            }
        ])
        .then((res) => {
            if (res.initial === "View All Employees") {
                queryAll();
            } else if (res.initial === "View All Employees By Department") {
                // querySongs();
            } else if (res.initial === "View All Employees By Role") {
                // queryRange();
            } else if (res.initial === "Add Employee") {
                // queryMultArtist();
            } else if (res.initial === "Add Role") {
                // queryAlbum();
            } else if (res.initial === "Add Department") {
                // queryAlbum();
            } else if (res.initial === "Update Employee Role") {
                // queryAlbum();
            } else {
                connection.end();
            }
        });
}

connection.connect((err) => {
    if (err) throw err;
    // console.log(`connected as id ${connection.threadId}`);
    console.log("WELCOME TO YOUR EMPLOYEE MANAGEMENT SYSTEM!");
    initialPrompt();
});