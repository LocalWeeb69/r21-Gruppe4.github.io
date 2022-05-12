class TextObject extends GameObject {

    constructor(text) {
        let drawOrder = 10;
        super(drawOrder)
        this.text = text;
        this.xPosition = 300;
        this.yPosition = 400;
        this.size = 60;
        this.color = "yellow";
    }

    draw() {
        drawText(
            this.text,
            this.xPosition,
            this.yPosition,
            this.size,
            this.color
        );
    }

}