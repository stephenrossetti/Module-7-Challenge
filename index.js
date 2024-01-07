// TODO: Include packages needed for this application
// require 'fs' and 'inquirer' to use those programs//
// require generateMarkdown.js access that file paths//
let fs = require('fs');
let inquirer = require('inquirer');
let generateMarkdown = require('./assets/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of the project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for the project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter applicable links and/or instructions for usage of the project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines for the project:',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter testing instructions for the project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license for the project:',
        choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'None'],
    },
    {
        type: 'input',
        name: 'userNameGitHub',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(JSON.stringify(data,null,' '));
            writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();