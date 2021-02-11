class Employee {
  constructor (name, id, email){
    this.name = name
    this.id = id
    this.email = email
  }
  getName() {
    return this.name
  }
  getID() {
    return this.id
  }
  getEmail(){
    return this.email
  }
  getRole(){
    return "Employee"
  }
}

module.exports = Employee;

// const inquirer = require('inquirer');
// const Manager = require('../lib/Manager');

// function Employee(managerName, managerID, managerEmail) {
//     this.managerName = managerName;
//     this.managerID = managerID;
//     this.managerEmail = managerEmail;
//   }


// Employee.prototype.getName = function() {
//     inquirer.prompt({
//       type: "text",
//       name: "managerName",
//       message: "What is the team manager's name?"
// })
// .then(({ managerName }) => {
//   this.managerName = new Employee(managerName);
//   this.getID()
// });
// }

// Employee.prototype.getID = function() {
//     inquirer.prompt({
      // type: "text",
      // name: "managerID",
      // message: "What is the team manager's ID?"
// })
// .then(({ managerID }) => {
//       this.managerID = new Employee(managerID);
//       this.getEmail();
// });
// }

// Employee.prototype.getEmail = function() {
//     inquirer.prompt({
//       type: "text",
//       name: "managerEmail",
//       message: "What is the manager's email address?"
// })
// .then(({ managerEmail }) => {
//   this.managerEmail = new Employee(managerEmail);
//   new Manager().getRole();
// });
// }

// module.exports = Employee;