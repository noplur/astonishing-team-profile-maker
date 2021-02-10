function Manager(officeNumber) {
  this.officeNumber = officeNumber;
  this.getOfficeNumber = function() {
    return this.officeNumber;
  }
}

Manager.prototype.getOfficeNumber = function() {
  inquirer
    .prompt({
      type: "text",
      name: "officenumber",
      message: "What is " + EmployeeName + "'s office number?"
    })
    .then(({ officeNumber }) => {
      this.officeNumber = new Manager(officeNumber);

      this.getRole();
    });
  };

module.exports = Manager;