// Importing dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// Importing classes for future use
const Employee = require("./classes/Employee");
const Role = require("./classes/Role");
const Department = require("./classes/Department");

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
        'SELECT first_name, last_name, title, salary, name FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id',
        (err, res) => {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        }
    );
    // Adding some context to the query
    console.log("See below for a full list of your employees!");
};

const queryRole = () => {
    const query = connection.query(
        'SELECT title, salary, name FROM roles INNER JOIN departments ON roles.department_id = departments.id',
        (err, res) => {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        }
    );
    // Adding some context to the query
    console.log("See below for a full list of company roles.");
};

const queryDept = () => {
    const query = connection.query(
        'SELECT * FROM departments',
        (err, res) => {
            if (err) throw err;
            console.table(res);
            initialPrompt();
        }
    );
    // Adding some context to the query
    console.log("See below for a full list of company departments.");
};

const queryAddEmp = () => {
    const roleChoices = [];
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            roleChoices.push(res[i].id);
        }
    });
    inquirer
        .prompt([
            {
                type: "input", 
                message: "Please enter the employee's first name: ", 
                name: "first"
            },
            {
                type: "input", 
                message: "Please enter the employee's last name: ", 
                name: "last"
            },
            {
                type: "list", 
                message: "Please select the new employee's role ID.", 
                name: "role", 
                choices: roleChoices
            }
        ])
        .then((res) => {
            if (res.role <= 3) {
                const query = connection.query(
                    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE ("${res.first}", "${res.last}", ${res.role}, 1)`,
                    (err, res) => {
                        if (err) throw err;
                        initialPrompt();
                    }
                );
                // Adding some context to the query
                console.log("Employee added!");
            } else if (res.role >= 7) {
                const query = connection.query(
                    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE ("${res.first}", "${res.last}", ${res.role}, 7)`,
                    (err, res) => {
                        if (err) throw err;
                        initialPrompt();
                    }
                );
                // Adding some context to the query
                console.log("Employee added!");
            } else {
                const query = connection.query(
                    `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE ("${res.first}", "${res.last}", ${res.role}, 4)`,
                    (err, res) => {
                        if (err) throw err;
                        initialPrompt();
                    }
                );
                // Adding some context to the query
                console.log("Employee added!");
            }
        });
}

const queryAddRole = () => {
    const deptChoices = [];
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            deptChoices.push(res[i].id);
        }
    });
    inquirer
        .prompt([
            {
                type: "input", 
                message: "Please give the new role a name: ",
                name: "title"
            },
            {
                type: "input", 
                message: "Please enter the starting annual salary in the form of a number: ",
                name: "salary"
            },
            {
                type: "list",
                message: "Please select a department ID for this new role: ",
                name: "dept",
                choices: deptChoices
            }
        ])
        .then((res) => {
            const query = connection.query(
                `INSERT INTO roles (title, salary, department_id) VALUE ("${res.title}", ${res.salary}, ${res.dept})`,
                (err, res) => {
                    if (err) throw err;
                    initialPrompt();
                }
            );
            // Adding some context to the query
            console.log("Role added!");
        });
}

const queryAddDept = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the department you would like to add?",
                name: "title"
            }
        ])
        .then((res) => {
            const query = connection.query(
                `INSERT INTO departments (name) VALUE ("${res.title}")`,
                (err, res) => {
                    if (err) throw err;
                    initialPrompt();
                }
            );
            // Adding some context to the query
            console.log("Department added!");
        })
}

// const queryUpdateRole = () => {
//     const roleUpdates = [];
//     connection.query("SELECT * FROM roles", function (err, res) {
//         if (err) throw err;
//         for (i = 0; i < res.length; i++) {
//             roleUpdates.push(res[i].title);
//         }
//     });
//     inquirer
//         .prompt([
//             {
//                 type: "list",
//                 message: "Which role would you like to update?",
//                 name: "selection",
//                 choices: roleUpdates
//             },
//             {
//                 type: "input",
//                 message: "Please enter the role's new salary in the form of a number: ",
//                 name: "newsal"
//             }
//         ])
//         .then((res) => {
//             const query = connection.query(
//                 `UPDATE roles SET salary = ${res.newsal} WHERE title = "${res.selection}"`,
//                 (err, res) => {
//                     if (err) throw err;
//                     initialPrompt();
//                 }
//             );
//             // Adding some context to the query
//             console.log("Role updated!");
//         })
// }

// Write initial prompt function to run when program is initiated
const initialPrompt = () => {
    inquirer
        .prompt([
            {
                type: "list", 
                message: "What would you like to do?",
                name: "initial", 
                choices: ["View All Employee Information", "View All Departments", "View All Roles", "Add Employee", "Add Department", "Add Role", "Exit"],
            }
        ])
        .then((res) => {
            if (res.initial === "View All Employee Information") {
                queryAll();
            } else if (res.initial === "View All Departments") {
                queryDept();
            } else if (res.initial === "View All Roles") {
                queryRole();
            } else if (res.initial === "Add Employee") {
                queryAddEmp();
            } else if (res.initial === "Add Role") {
                queryAddRole();
            } else if (res.initial === "Add Department") {
                queryAddDept();
            // } else if (res.initial === "Update Role Information") {
            //     queryUpdateRole();
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