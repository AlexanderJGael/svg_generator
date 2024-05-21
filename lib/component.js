const { Triangle, Square, Circle } = require('./shapes');
const Text = require('./text');

// Returns formatted shape from user answers
const createShape = (shape, color) => {
    // converts color to lowercase and saves the characters as an array
    color = color.toLowerCase().split(' ');
    
    // Uses switch statement to determine shape
    switch (shape) {
        case 'Triangle':
            return new Triangle(color);
        case 'Square':
            return new Square(color);
        case 'Circle':
            return new Circle(color);
    }
};

// Returns formatted text from user answers
const createText = (text, color) => {
    // converts text and color cases and saves the characters as an array
    text = text.toUpperCase().split(' ');
    color = color.toLowerCase().split(' ');

    return new Text(text, color);
};

module.exports = { createShape, createText }