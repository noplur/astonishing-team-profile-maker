const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = []
const generatePage = require('./src/page-template')

const writeToFile = (fileName, answers) => {
    fs.writeFile(fileName, answers, err => {
      if (err) throw new Error(err);
  
      console.log('Page created! Check out team_profile_maker.html in the dist directory to see it!');
    })        
  };

 const init = () => {
      initialQuestions ()
      };

init();

function initialQuestions () {
    inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the team employee's name?"
    },
    {
    type: "number",
    name: "id",
    message: "What is the team employee's ID?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the team employee's email address?"
    },
    {
    type: "number",
    name: "officeNumber",
    message: "What is the team manager's office number?"
    },
])
.then((answers) => {
    const manager = new Manager (answers.role = "Manager", answers.name, answers.id, answers.email, answers.officeNumber)
    employees.push(manager)
    chooseEmployee();
})
}

function chooseEmployee () {
    inquirer.prompt(
        {
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
            console.log(employees);
            writeToFile('./dist/team_profile_maker.html', generatePage(employees))
          }
    })
}

function createEngineer() {    
inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the team engineer's name?"
    },
    {
    type: "number",
    name: "id",
    message: "What is the team engineer's ID?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the team engineer's email address?"
    },
    {
    type: "input",
    name: "github",
    message: "What is the team engineer's GutHub user name?"
    },
])
.then((answers) => {
    const engineer = new Engineer (role = "Engineer", answers.name, answers.id, answers.email, answers.github)
    employees.push(engineer)
    chooseEmployee();
})
}

function createIntern() {
    
inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the team intern's name?"
    },
    {
    type: "number",
    name: "id",
    message: "What is the team intern's ID?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the team intern's email address?"
    },
    {
    type: "input",
    name: "school",
    message: "What school does the team intern attend?"
    },
])
.then((answers) => {
    const intern = new Intern (role = "Intern", answers.name, answers.id, answers.email, answers.school)
    employees.push(intern)
    chooseEmployee();
})
};

