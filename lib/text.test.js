const { test, expect } = require('@jest/globals');
const {createText} = require('./component');

test('Text', () => {
    const text = createText('Hello', 'blue');
    expect(text.render()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">HELLO</text>`);
});