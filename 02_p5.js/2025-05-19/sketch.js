function setup() {
    let canvas = createCanvas(500, 500);
    let canvasLocation = document.getElementById('canvas-location');
    canvas.parent(canvasLocation);
}

function draw() {
    background(0, 0, 255);
    fill(0, 255, 0);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
}
