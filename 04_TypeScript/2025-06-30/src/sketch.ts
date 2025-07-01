import P5Lib from 'p5';

function sketch(p5: P5Lib) {
    let fillColor = p5.color(255, 0, 0);

    p5.setup = () => {
        p5.createCanvas(720, 720);
    }

    p5.draw = () => {
        p5.background(0, 0, 255);
        p5.fill(fillColor);
        p5.ellipse(p5.mouseX, p5.mouseY, 50, 50);
    }

    p5.mousePressed = () => {
        fillColor = p5.color(p5.random(255), p5.random(255), p5.random(255));
    }

    p5.keyPressed = () => {

    }
}

new P5Lib(sketch);
