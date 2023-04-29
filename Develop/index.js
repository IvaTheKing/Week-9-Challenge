// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const generateMarkdown = require ("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?"
}, {
    type: "input",
    name: "description",
    message: "What is the description of your project?"
}, {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for the project?"
}, {
    type: "input",
    name: "usage",
    message: "What is the usage information for the project?"
}, {
    type: "list",
    name: "license",
    choices: [
        //licenses chosen from a gpt prompt asking it what were the top 6 licenses used in simple node.js web apps.//
        "MIT License",
        "Apache License",
        "GNU General Public License (GPL) v3",
        "BSD 3-Clause License",
        "ISC License",
        "Mozilla Public License 2.0",
        "Other"
    ]
}, {
    type: "input",
    name: "contributing",
    message: "What are the contributing guidelines for the project?"
}, {
    type: "input",
    name: "tests",
    message: "What are the test requirementes for the project?"
}, {
    type: "input",
    name: "usernameQuestion",
    message: "What is your github username?"
}, {
    type: "input",
    name: "emailQuestion",
    message: "What is your email address?"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README file created successfully!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
