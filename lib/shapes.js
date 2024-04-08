class Shape {
    constructor(text) {
        this.text = text;
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('You have to implement the method render!');
    }
}

class Triangle extends Shape {
    render() {
        // Example implementation for rendering a triangle as SVG
        return `<svg width="100" height="100"><text x="0" y="15" fill="${this.color}">${this.text}</text></svg>`;
    }
}

class Circle extends Shape {
    render() {
        // Example implementation for rendering a circle as SVG
        return `<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="${this.color}" /><text x="20" y="55" fill="${this.color}">${this.text}</text></svg>`;
    }
}

class Square extends Shape {
    render() {
        // Example implementation for rendering a square as SVG
        return `<svg width="100" height="100"><rect width="80" height="80" x="10" y="10" fill="${this.color}" /><text x="20" y="55" fill="${this.color}">${this.text}</text></svg>`;
    }
}

module.exports = { Triangle, Circle, Square };
