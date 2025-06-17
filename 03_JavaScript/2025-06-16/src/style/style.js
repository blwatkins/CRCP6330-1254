class Style {
    strokeWeight;
    strokeColor;
    fillColor;

    constructor(fillColor, strokeColor, strokeWeight = 1) {
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWeight = strokeWeight;
    }

    apply() {
        if (this.fillColor && this.fillColor instanceof p5.Color) {
            fill(this.fillColor);
        } else {
            noFill();
        }

        if (this.strokeWeight && typeof this.strokeWeight === 'number') {
            strokeWeight(this.strokeWeight);
        }

        if (this.strokeColor && this.strokeColor instanceof p5.Color) {
            stroke(this.strokeColor);
        } else {
            noStroke();
        }
    }
}
