class Square extends Rectangle {
    constructor(position, speed, sideLength) {
        super(position, speed, new Dimension(sideLength));
        this.style = new Style(color(255, 0, 0, 100), null);
    }
}
