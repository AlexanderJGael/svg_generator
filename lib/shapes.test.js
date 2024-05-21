const { test, expect } = require('@jest/globals');
const {createShape, createText} = require('./component');

test('Triangle', () => {
    const shape = createShape('Triangle', 'blue');
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
});

test('Square', () => {
    const shape = createShape('Square', 'blue');
    expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="blue" />`);
});

test('Circle', () => {
    const shape = createShape('Circle', 'blue');
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
})