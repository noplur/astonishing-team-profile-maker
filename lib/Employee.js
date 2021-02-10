function Employee(EmployeeName) {
    this.EmployeeName = EmployeeName;
    this.initializeEmployee = function() {
      return this.EmployeeName;
    }
  }

Employee.prototype.initializeEmployee = function() {
    inquirer.prompt({
      type: "text",
      name: "EmployeeName",
      message: "What is the employee's name?"
},
{   
    type: "text",
    name: "EmployeeID",
    message: "What is the employee's ID?"
},
{   
    type: "text",
    name: "EmployeeEmail",
    message: "What is the employee's email address?"
})
.then(({ EmployeeName }) => {
  this.EmployeeName = new Employee(EmployeeName);

  this.getRole();
});
}

module.exports = Employee;