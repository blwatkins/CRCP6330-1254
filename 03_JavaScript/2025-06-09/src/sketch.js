let f;

function setup() {
    createCanvas(500, 500);
    f = new Flower();
}

function draw() {
    background(255);
    f.draw();
}

function mousePressed() {
    f.setX(mouseX);
    f.y = mouseY;
}
