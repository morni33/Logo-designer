const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
    try {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters:',
                validate: function (input) {
                    return input.length <= 3 ? true : 'Please enter up to three characters.';
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter text color (keyword or hexadecimal):'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['Triangle', 'Circle', 'Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter shape color (keyword or hexadecimal):'
            }
        ]);

        let shape;
        switch (userInput.shape) {
            case 'Triangle':
                shape = new Triangle(userInput.text);
                break;
            case 'Circle':
                shape = new Circle(userInput.text);
                break;
            case 'Square':
                shape = new Square(userInput.text);
                break;
        }

        shape.setColor(userInput.shapeColor);

        const svgContent = shape.render();

        fs.writeFileSync('logo.svg', svgContent);

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error);
    }
}

generateLogo();
