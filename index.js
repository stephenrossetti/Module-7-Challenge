// require 'fs' and 'inquirer' to use those programs//
// require generateMarkdown.js access that file path and respective functions//
let fs = require('fs');
let inquirer = require('inquirer');
let generateMarkdown = require('./generateMarkdown');

// created array with command-line questions and types that feed into sample README//
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

// Function that writes README file using fs.writefile//
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function that initializes the new file to be written and stringifies inputs//
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(JSON.stringify(data,null,' '));
            writeToFile('READMEsample.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();