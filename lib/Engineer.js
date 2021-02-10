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
      })
      .then(({ github }) => {
        this.github = new Engineer(github);

        this.getRole();
      });

  };
  
module.exports = Engineer;