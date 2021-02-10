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
    })
    .then(({ school }) => {
      this.school = new Intern(school);

      this.getRole();
    });
};

module.exports = Intern;