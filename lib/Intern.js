const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');

function Intern(internName, internID, internEmail, internSchool) {
  this.internName = internName;
  this.internID = internID;
  this.internEmail = internEmail;
  this.internSchool = internSchool;
}
  
Intern.prototype.getRole = function() {
      inquirer.prompt({
        type: "text",
        name: "internName",
        message: "What is the intern's name?"
  })
  .then(({ internName }) => {
    this.internName = new Intern(internName);
    this.getInternID()
  });
  }

  Intern.prototype.getInternID = function() {
      inquirer.prompt({
      type: "text",
      name: "internID",
      message: "What is the intern's ID?"
})
.then(({ internID }) => {
      this.internID = new Intern(internID);
      this.getInternEmail();
});
}

Intern.prototype.getInternEmail = function() {
      inquirer.prompt({
      type: "text",
      name: "internEmail",
      message: "What is the intern's email address?"
})
.then(({ internEmail }) => {
      this.internEmail = new Intern(internEmail);
      this.getInternSchool();
});
}

Intern.prototype.getInternSchool = function() {
      inquirer.prompt({
      type: "text",
      name: "internschool",
      message: "What school does the intern attend?"
})
.then(({ internSchool }) => {
          this.internSchool = new Intern(internSchool);
          this.nextChoiceIntern();
});
}

Intern.prototype.nextChoiceIntern = function() {
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
  
module.exports = Intern;