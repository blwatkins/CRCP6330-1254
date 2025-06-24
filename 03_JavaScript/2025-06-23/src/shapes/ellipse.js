class Ellipse extends Shape {
    constructor(position, speed, dimension) {
        super(position, speed, dimension, new Style(null, color(255, 0, 255), 5));
    }

    draw() {
        super.draw();
        ellipse(this.position.x, this.position.y, this.dimension.width, this.dimension.height);
    }
}
