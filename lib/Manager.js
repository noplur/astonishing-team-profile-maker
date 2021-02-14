const Employee = require('../lib/Employee');

class Manager extends Employee {
  constructor (role, name, id, email, officeNumber){
    super(name, id, email)
    this.role = role
    this.officeNumber = officeNumber
  }
  getOfficeNumber() {
    return this.officeNumber
  }
  getRole() {
    return this.role
  }
}

module.exports = Manager;