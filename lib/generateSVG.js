const input = require('./input');
const { createShape, createText } = require('./component');
const fs = require('fs');
const path = require('path');


const generateSVG = () => {
    input().then(answers => {
        const text = createText(answers.chars, answers.char_color);
        console.log(text.render());

        const shape = createShape(answers.shape, answers.shape_color);
        console.log(shape.render());
        
        const svgString = 
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shape.render()}
                ${text.render()}
            </svg>`
        
        const outputPath = path.join(__dirname, '../output', 'logo.svg');
        fs.writeFile(outputPath, svgString, (err) => {
            if (err) {
                console.log('Error writing SVG file', err);
            } else {
                console.log('Generated logo.svg');
            }
        })
        console.log(svgString);
    })
}

module.exports = generateSVG;