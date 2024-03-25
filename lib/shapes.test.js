// Mocking the shape class
const shape = new Triangle();
// Mocking the render method
shape.setColor("blue");
// Mocking the render method
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');