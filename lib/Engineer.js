// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

// const tim = new Engineer("Tim", 3, "tim@tim.com", "github/tim");
// console.log(tim);
// console.log(tim.name);
// console.log(tim.email);
// console.log(tim.id);
// console.log(tim.gitHub);

module.exports = Engineer;