class Circle extends Ellipse {
    constructor(position, speed, diameter) {
        super(position, speed, new Dimension(diameter));
        this.style = new Style(color(0, 255, 0, 100), null);
    }
}
