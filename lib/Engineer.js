const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor (role, name, id, email, github){
    super(name, id, email)
    this.role = role
    this.github = github
  }
  getGithub() {
    return this.github
  }
  getRole() {
    return this.role
  }
}

module.exports = Engineer;