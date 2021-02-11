function Intern(school) {
  this.school = school;
  this.getSchool = function() {
    return this.school;
  }
}

Intern.prototype.getSchool = function() {
    inquirer
    .prompt({
      type: "text",
      name: "school",
      message: "What school is " + EmployeeName + "enrolled in?"
      },
      {
        type: "confirm",
        name: "nextEmployee",
        message: "Would you like to add another employee?",
        default: false
      })
    .then(({ school }) => {
      this.school = new Intern(school);

      if (nextEmployee.confirmNextEmployee) {
        return this.getRole();
      } else {
        return generatePage();
      }
    });
};

module.exports = Intern;