const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'chars',
        message: 'Enter three characters to display',
    },
    {
        type: 'input',
        name: 'char_color',
        message: 'Enter color or hexidecimal value for characters',
    },
    {
        type: 'select',
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

const input = () => {
    return inquirer.prompt(questions);
};

module.exports = input;