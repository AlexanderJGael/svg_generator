const { Triangle, Square, Circle } = require('./shapes');
const Text = require('./text');

const createShape = (shape, color) => {
    switch (shape) {
        case 'Triangle':
            return new Triangle(color);
        case 'Square':
            return new Square(color);
        case 'Circle':
            return new Circle(color);
    }
};

const createText = (text, color) => {
    return new Text(text, color);
};

module.exports = { createShape, createText }