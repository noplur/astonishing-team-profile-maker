const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// const Employee = require('./lib/Employee');

// new Employee().getName();
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = []
inquirer.prompt([
    {
    type: "text",
    name: "name",
    message: "What is the team employee's name?"
    },
    {
    type: "text",
    name: "id",
    message: "What is the team employee's ID?"
    },
    {
    type: "text",
    name: "email",
    message: "What is the employee's email address?"
    },
    {
    type: "text",
    name: "officenumber",
    message: "What is the team manager's office number?"
    },
])
.then((answers) => {
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
    employees.push(manager)
    chooseEmployee();
})

function chooseEmployee () {
    inquirer.prompt({
        type: "list",
        name: "role",
        message: "What employee position would you like to add next?",
        choices: [{name: "Engineer", value: "Engineer"}, {name: "Intern", value: "Intern"}, {name: "Finish building team", value: "generatepage"}],
        })
        .then(({ role }) => {
        if (role === "Engineer") {
            createEngineer();
          }
          else if (role === "Intern") {
            createIntern();
          } else {
            generatePage();
          }
    })
}
function createEngineer() {
    
inquirer.prompt([
    {
    type: "text",
    name: "name",
    message: "What is the team employee's name?"
    },
    {
    type: "text",
    name: "id",
    message: "What is the team employee's ID?"
    },
    {
    type: "text",
    name: "email",
    message: "What is the employee's email address?"
    },
    {
    type: "text",
    name: "github",
    message: "What is the engineer's GutHub user name?"
    },
])
.then((answers) => {
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
    employees.push(engineer)
    chooseEmployee();
})
}

function createIntern() {
    
inquirer.prompt([
    {
    type: "text",
    name: "name",
    message: "What is the team employee's name?"
    },
    {
    type: "text",
    name: "id",
    message: "What is the team employee's ID?"
    },
    {
    type: "text",
    name: "email",
    message: "What is the employee's email address?"
    },
    {
    type: "text",
    name: "school",
    message: "What school does the intern attend?"
    },
])
.then((answers) => {
    const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
    employees.push(intern)
    chooseEmployee();
})
}

function generatePage () {
    fs.writeFile(path.join(__dirname,"dist", "team_profile_maker.html"), "hello", "UTF-8", function (err){
        if (err) throw err
        console.log("file, build")
    })
}
