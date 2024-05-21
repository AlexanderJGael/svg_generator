<style>
    span {
        font-size: 4rem;
        font-weight: 900;
        text-align: 'center';
        color: transparent;
        text-stroke: 1px white;
        -webkit-text-stroke: 1px white;
        letter-spacing: .5rem
    }

    h1, h2, h3, h4, h5, h6 {
        text-align: center;
        margin-top: 4rem;
        font-size: 2rem;
        font-weight: 900;
        color: transparent;
        text-stroke: 1px white;
        -webkit-text-stroke: 1px white;
        letter-spacing: .2rem;
    }
</style>

<!-- Title -->
<div align='center'>
    <span>SVG Generator<span>
</div>

## Description
This project is a demonstration of object-oriented programming (OOP) concepts using JavaScript. It includes a library of shapes (`lib/shapes.js`) and an interactive command-line interface (`index.js`) that allows users to generate SVG files of different shapes.

## Example

Input:
    
    Enter three characters to display:
    $ ajg

    Enter a color or hexidecimal value:
    $ white

    Choose one of the following shapes:
    > Circle

    Enter a color or hexidecimal value:
    $ pink

Output:

![Image](./assets/demo.svg)

## Features
- Object-oriented programming (OOP) concepts using JavaScript
- Library of shapes (lib/shapes.js) with different shapes such as triangles, squares, and circles
- Interactive command-line interface (index.js) that allows users to generate SVG files of different shapes
- Testing using Jest framework

## Technologies Used
- JavaScript: The primary programming language used for implementing the object-oriented programming concepts and the shapes library.
- npm: The package manager used to manage project dependencies.
- Jest: The testing framework used to write and run tests for the shapes library.
- Inquirer.js: The library used for creating interactive command-line interfaces.

## Usage
To install project dependencies, use the following command:

    npm install

to run the app, use the following command:

    npm start

This will start the interactive command-line interface, where a user is prompted to input three characters & associated color, and choose one of three characters & associated color to output an image with the text overlaying the shape as an SVG file.

## Testing
To run the tests, use the following command: 

    npm test

This will run the Jest test suite and display the test results.

## Walkthrough

<div align='center'>
    <video width='720' controls>
        <source src='/assets/videoWalkthrough.mp4' type='video/mp4'>
        Your browser does not support the video tag
    </video>
</div>

## License
This project is licensed under the ISC license. See the [LICENSE](LICENSE) file for more details.