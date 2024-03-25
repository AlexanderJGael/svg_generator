// Importing the inquirer module
const inquirer = require('inquirer');

// Array of questions to be prompted to the user
const questions = [
    {
        type: 'input',
        name: 'chars',
        message: 'Enter three characters to display:'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color keyword or hexadecimal value:'
    },
]

// Using the prompt method from inquirer to ask the questions
inquirer.prompt(questions).then(answers => {
    // Checking if the user entered more than three characters
    if (answers.chars.length > 3) {
        console.log('Error: More than three characters entered.');
        return;
    }

    // Checking if the user entered a valid color
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(answers.color) && !/^([a-z]+)$/i.test(answers.color)) {
        console.log('Error: Invalid color entered.');
        return;
    }

    // Creating an object with the user's answers
    const characters = {
        chars: answers.chars,
        color: answers.color
    };
});

// Exporting the characters object
module.exports = characters;