// TODO: Include packages needed for this application
// importing inquirer and fs 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// I didn't like the array approach, so i moved to object instead
const questions = {
    title: 'What is the title of your project?',

    description: 'Please provide a description of the project.',

    installation: 'Please provide any installation instructions.',

    usage: 'Please provide any usage instructions you have for the end user.',

    license: 'Do you want to include a license in this project?',

    contributing: 'Please enter any contribution guidelines you have for the project.',

    tests: 'Please provide any test instructions you have for the project.',

    email: 'What is your email address?',

    github: 'What is your GitHub Id?'
};

// prompt array that 
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: questions.title
        },
        {
            type: 'input',
            name: 'description',
            message: questions.description
        },
        {
            type: 'input',
            name: 'installation',
            message: questions.installation
        },
        {
            type: 'input',
            name: 'usage',
            message: questions.usage
        },
        {
            type: 'confirm',
            name: 'license',
            message: questions.license,
            default: false
        },
        {
            // This question is only asked when the license question is selected as yes
            type: 'list',
            name: 'licenseType',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'Apache 2.0', 'GNU General Public License v3.0'],
            when: (answers) => answers.license
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions.contributing
        },
        {
            type: 'input',
            name: 'tests',
            message: questions.tests
        },
        {
            type: 'input',
            name: 'email',
            message: questions.email
        },
        {
            type: 'input',
            name: 'github',
            message: questions.github
        }
    ]);
};
// TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {}
function writeToFile(fileName, data) {
    fs.writeFileSync('./output/readme.md', generateMarkdown(answers));
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('./output/readme.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();