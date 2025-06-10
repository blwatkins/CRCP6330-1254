class Flower {

    #x;
    #y;
    #size;
    #color;
    #petalCount;

    constructor() {
        this.#x = random(width);
        this.#y = random(height);
        this.#size = random(20, 50);
        this.#color = color(random(255), random(255), random(255));
        this.#petalCount = floor(random(5, 10));
    }

    draw() {
        push();
        translate(this.#x, this.#y);
        fill(this.#color);
        noStroke();
        for (let i = 0; i < this.#petalCount; i++) {
            let angle = map(i, 0, this.#petalCount, 0, TWO_PI);
            let xOffset = cos(angle) * this.#size;
            let yOffset = sin(angle) * this.#size;
            ellipse(xOffset, yOffset, this.#size, this.#size);
        }
        pop();
    }

    getX() {
        return this.#x;
    }

    setX(x) {
        this.#x = x;
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        this.#y = value;
    }
}
