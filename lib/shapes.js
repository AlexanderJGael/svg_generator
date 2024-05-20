const inquirer = require('inquirer');

class Triangle {
    constructor(color) {
        this.color = color
        return this
    }
    render() {
        const svgString = `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        `;
        return svgString;
    }
}

class Square {
    constructor(color) {
        this.color = color
        return this
    }

    render() { 
        const svgString = `
        <rect x="73" y="40" width="160" height="160" fill="${this.color}" />
        `;
        return svgString;
    }
}

class Circle {
    constructor(color) {
        this.color = color
        return this
    }
    render() {
        const svgString = `
        <circle cx="150" cy="105" r="80" fill="${this.color}" />
        `;
        return svgString;
    }
}

module.exports = { Triangle, Square, Circle }