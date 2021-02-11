const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function Manager(officeNumber) {
  this.officeNumber = officeNumber;
}

Manager.prototype.getRole = function() {
  inquirer.prompt({
      type: "text",
      name: "officenumber",
      message: "What is the team manager's office number?"
    })
.then(({ officeNumber }) => {
      this.officeNumber = new Manager(officeNumber);
      this.nextChoice()
})
};

Manager.prototype.nextChoice = function() {
  inquirer.prompt({
      type: "list",
      name: "role",
      message: "What employee position would you like to add next?",
      choices: [{name: "Engineer", value: "Engineer"}, {name: "Intern", value: "Intern"}, {name: "Finish building team", value: "generatepage"}],
      })
  .then(({ role }) => {
        if (role === "Engineer") {
          return new Engineer().getRole();
        }
        if (role === "Intern") {
          return new Intern().getRole();;
        } else {
          return generatePage();
        }
      })
};
    

module.exports = Manager;