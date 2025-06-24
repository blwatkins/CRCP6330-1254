let shapes = [];
let shapeTotal = 100;

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < shapeTotal; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(20, 100);
        let h = random(20, 100);
        let rand = Math.floor(random(100));
        let position = createVector(x, y);
        let speed = createVector(0, 0);

        if (rand % 4 === 0) {
            shapes.push(new Circle(position, speed, w));
        } else if (rand % 4 === 1) {
            shapes.push(new Square(position, speed, w));
        } else if (rand % 4 === 2) {
            shapes.push(new Ellipse(position, speed, new Dimension(w, h)));
        } else {
            shapes.push(new Rectangle(position, speed, new Dimension(w, h)));
        }
    }
}

function draw() {
    background(0);
    shapes.forEach(shape => {
        shape.draw();
    });
    swapShapes();
}

function swapShapes() {
    let i = Math.floor(random(shapes.length));
    let j = Math.floor(random(shapes.length));
    if (i !== j) {
        let temp = shapes[i];
        shapes[i] = shapes[j];
        shapes[j] = temp;
    }
}
