const inquirer = require('inquirer');

// Sets text and color from user answers and returns SVG string 
class Text {
    constructor(text, color) {
        // Removes spaces from user text and color answers
        this.text = text.join('');
        this.color = color.join('');
    }

    render() {
        const svgString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
        return svgString;
    }
}

module.exports = Text