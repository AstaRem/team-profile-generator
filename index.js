const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

//general questions for all employees
questionsEmployee = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee id?",
    },
    {
        type: "input",
        name: "email",
        message: "Email address?",
    }

]

//questions for manager
questionsManager = [
    ...questionsEmployee,
    {
        type: "input",
        name: "officeNumber",
        message: "Office number?",
    },
    {
        type: "list",
        name: "nextOption",
        message: "Would you like to add another team member?",
        choices:["Add an engineer", "Add an intern", "Finish building the team"]
    }
]

//questions for engineer
questionsEngineer = [
    ...questionsEmployee,
    {
        type: "input",
        name: "github",
        message: "GitHub account?"
    }, 
    {
        type: "list",
        name: "nextOption",
        message: "Would you like to add another team member?",
        choices:["Add an engineer", "Add an intern", "Finish building the team"]
    }

]

//questions for intern
questionsIntern = [
    ...questionsEmployee,
    {
        type: "input",
        name: "school",
        message: "School?"
    },
    {
        type: "list",
        name: "nextOption",
        message: "Would you like to add another team member?",
        choices:["Add an engineer", "Add an intern", "Finish building the team"]
    }
]



inquirer.prompt(questionsManager).then(answers => {
    const team = [];
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.push(manager);
    otherMembers(answers.nextOption);

    function otherMembers(option){
        if (option === "Add an engineer"){
            inquirer.prompt(questionsEngineer).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                console.log(engineer);
                const engineerOption = answers.nextOption;
                team.push(engineer)
                otherMembers(engineerOption);
            })
        }else if (option === "Add an intern"){
            inquirer.prompt(questionsIntern).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                const internOption = answers.nextOption;
                team.push(intern);
                otherMembers(internOption);
            })
            } else {
            console.log("Team build finished, now render html");
            const html = generateTeam(team);
            fs.writeFile("output/team.html", html, (err) => console.log(err))
                    }
    }
    });


