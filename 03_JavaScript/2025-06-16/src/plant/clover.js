class Clover extends Plant {
    #size;
    
    constructor(position, dimension) {
        super(position, dimension, new Style(color(0, 255, 0), null));
        this.#size = min(dimension.width, dimension.height);
    }

    draw() {
        push();
        translate(this.position.x, this.position.y);
        this.style.apply();

        let leafCount = 4;
        let theta = 0;
        for (let i = 0; i < leafCount; i++) {
            let ex = (this.#size * 0.5) * cos(theta);
            let ey = (this.#size * 0.5) * sin(theta);
            ellipse(ex, ey, this.#size, this.#size);
            theta += TWO_PI / leafCount;
        }

        pop();
    }
}
