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
        message: 'Title of my project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of my project?',
    },
    {
        type: 'input',
        name: 'installtion',
        message: 'Installion instructions for my project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage of my project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing guidelines for my project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Instructions for testing my project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license for my project?',
        choices: ['MIT', 'GPLv2', 'GPLv2', 'BSD 3-clause', 'Apache', 'None'],
    },
    {
        type: 'input',
        name: 'userNameGitHub',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, JSON.stringify(data, null, ' '), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });
}

// Function call to initialize app
init();