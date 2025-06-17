// plants

// clovers
// grass

// flowers
// "clear flowers"
// "transparent flowers"
// "solid flowers"

// when plants are close to each other, you draw a line between them

let c;

function setup() {
    createCanvas(500, 500);
    c = new Clover(createVector(width / 2, height / 2), new Dimension(25, 25));
}

function draw() {
    background(255);
    c.draw();
}
