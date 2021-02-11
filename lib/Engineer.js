const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor (name, id, email, github){
    super(name, id, email)
    this.github = github
  }
  getGithub() {
    return this.github
  }
  getRole() {
    return "Engineer"
  }
}

module.exports = Engineer;


// const inquirer = require('inquirer');
// const Intern = require('../lib/Intern');

// function Engineer(engineerName, engineerID, engineerEmail, engineerGithub) {
//   this.engineerName = engineerName;
//   this.engineerID = engineerID;
//   this.engineerEmail = engineerEmail;
//   this.engineerGithub = engineerGithub;
// }
  
// Engineer.prototype.getRole = function() {
//       inquirer.prompt({
//         type: "text",
//         name: "engineerName",
//         message: "What is the engineer's name?"
//   })
//   .then(({ engineerName }) => {
//     this.engineerName = new Engineer(engineerName);
//     this.getEngineerID()
//   });
//   }

// Engineer.prototype.getEngineerID = function() {
//       inquirer.prompt({
//       type: "text",
//       name: "engineerID",
//       message: "What is the engineer's ID?"
// })
// .then(({ engineerID }) => {
//       this.engineerID = new Engineer(engineerID);
//       this.getEngineerEmail();
// });
// }

// Engineer.prototype.getEngineerEmail = function() {
//       inquirer.prompt({
//       type: "text",
//       name: "engineerEmail",
//       message: "What is the engineer's email address?"
// })
// .then(({ engineerEmail }) => {
//       this.engineerEmail = new Engineer(engineerEmail);
//       this.getEngineerGithub();
// });
// }

// Engineer.prototype.getEngineerGithub = function() {
//       inquirer.prompt({
//       type: "text",
//       name: "github",
//       message: "What is the engineer's Github user name?"
// })
// .then(({ engineerGithub }) => {
//           this.engineerGithub = new Engineer(engineerGithub);
//           this.nextChoiceEngineer();
// });
// }

// Engineer.prototype.nextChoiceEngineer = function() {
//       inquirer.prompt({
//         type: "list",
//         name: "role",
//         message: "What employee position would you like to add next?",
//         choices: [{name: "Engineer", value: "Engineer"}, {name: "Intern", value: "Intern"}, {name: "Finish building team", value: "generatepage"}],
//         })
//       .then(({ role }) => {
//           if (role === "Engineer") {
//             return new Engineer().getRole();
//           }
//           if (role === "Intern") {
//             return new Intern().getRole();;
//           } else {
//             return generatePage();
//           }
//         })
//   };
  
// module.exports = Engineer;