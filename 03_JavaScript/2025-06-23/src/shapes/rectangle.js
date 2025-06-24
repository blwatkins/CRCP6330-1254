class Rectangle extends Shape {
    constructor(position, speed, dimension) {
        super(position, speed, dimension, new Style(null, color(0, 0, 255), 3));
    }

    draw() {
        super.draw();
        rectMode(CENTER);
        rect(this.position.x, this.position.y, this.dimension.width, this.dimension.height);
    }
}
