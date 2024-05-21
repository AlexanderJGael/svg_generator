const inquirer = require('inquirer');

class Text {
    constructor(text, color) {
        text = text.toUpperCase();
        this.text = text;
        this.color = color;
    }

    render() {
        const svgString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
        return svgString;
    }
}

module.exports = Text