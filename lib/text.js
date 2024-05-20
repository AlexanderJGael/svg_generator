const inquirer = require('inquirer');

class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    render() {
        const svgString = `
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40px" fill="${this.color}">${this.text}</text>
        `;
        return svgString;
    }
}

module.exports = Text