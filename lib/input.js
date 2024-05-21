const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'chars',
        message: 'Enter three characters to display',
        validate: chars => chars.length === 3,
    },
    {
        type: 'input',
        name: 'char_color',
        message: 'Enter color or hexidecimal value for characters',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape to display',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter color or hexidecimal value for your shape',
    },
]

// Prompts user for input using questions array
// Return user answers
const input = () => inquirer.prompt(questions).then(answers => answers);

module.exports = input;