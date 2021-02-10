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

//     this.types = ['office number']
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

// if (this.name === 'office number') {
//     this.value = Math.floor(Math.random() * 1);
//   } else {
//     this.value = Math.floor(Math.random() * 2);
//   }
// }

module.exports = Manager;