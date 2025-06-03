function setup() {
    createCanvas(500, 500, WEBGL);
    brush.field('seabed');
    background(255);
}

function draw() {
}

function keyPressed() {
    let brushes = brush.box();
    brush.set(brushes[0], '#0000FF', 1);
    brush.flowLine(
        random(-width / 2.0, width / 2.0),
        random(-height / 2.0, height / 2.0),
        100,
        random(TWO_PI));
}
