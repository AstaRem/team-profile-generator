const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
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

questionsIntern = [
    ...questionsEmployee,
    {
        type: "input",
        name: "school",
        message: "School?"
    }

]



inquirer.prompt(questionsManager).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    console.log(answers);
    console.log(manager);
    console.log(answers.nextOption);
    const team = [];
    //, , "Finish building the team"
    if (answers.nextOption === "Add an engineer"){
        inquirer.prompt(questionsEngineer).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log(engineer);
        })
    }else if (answers.nextOption === "Add an intern"){
        inquirer.prompt(questionsIntern).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(intern);
        })

    } else {
        console.log("Team build finished, now render html");
    }
    });


