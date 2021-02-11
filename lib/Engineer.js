function Engineer(github) {
    this.github = github;
    this.getGithub = function() {
      return this.github;
    }
  }
  
  Engineer.prototype.getGithub = function() {
      inquirer
      .prompt({
        type: "text",
        name: "github",
        message: "What is " + EmployeeName + "'s Github user name?"
      },
      {
        type: "text",
        name: "githubLink",
        message: "What is " + EmployeeName + "'s Github link url?"
      },
      {
        type: "confirm",
        name: "nextEmployee",
        message: "Would you like to add another employee?",
        default: false
      })
      .then(({ github }) => {
        this.github = new Engineer(github);
        if (nextEmployee.confirmNextEmployee) {
          return this.getRole();
        } else {
          return generatePage();
        }
      });

  };
  
module.exports = Engineer;