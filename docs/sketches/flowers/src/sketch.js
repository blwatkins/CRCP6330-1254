let flowers = [];

function setup() {
    createCanvas(500, 500);
    let flowerTotal = floor(random(1, 50));

    for (let i = 0; i < flowerTotal; i++) {
        flowers.push(new Flower());
    }
}

function draw() {
    background(255);

    for (let flower of flowers) {
        flower.draw();
    }

    noFill();
    strokeWeight(5);
    rect(0, 0, width, height);
}

function mousePressed() {
    let index = floor(random(flowers.length));

    if (index >= 0 && index < flowers.length) {
        flowers[index].setX(mouseX);
        flowers[index].y = mouseY;
    }
}
