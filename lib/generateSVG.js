const input = require('./input');
const { createShape, createText } = require('./component');
const fs = require('fs');
const path = require('path');


const generateSVG = () => {
    // Runs inquirer and returns user answers
    input().then(answers => {
        // Passes user answers to createText and createShape functions
        const text = createText(answers.chars, answers.char_color);

        const shape = createShape(answers.shape, answers.shape_color);
        
        // Returns SVG string with generated text and shape
        const svgString = 
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                ${text.render()}
            </svg>`
        
        // Writes SVG string and name to output folder, then creates the file in the output folder
        const outputPath = path.join(__dirname, '../output', 'logo.svg');
        fs.writeFile(outputPath, svgString, (err) => {
            if (err) {
                console.log('Error writing SVG file', err);
            } else {
                console.log('Generated logo.svg');
            }
        })
    })
}

module.exports = generateSVG;