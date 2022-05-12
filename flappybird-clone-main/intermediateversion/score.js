class Score extends GameObject {

    constructor () {
        let drawOrder = 9;
        super(drawOrder);
        this.image = new Image(60, 60);
        this.image.src = "../assets/images/coin.png";
        this.imageXPosition = 70;
        this.imageYPosition = 70;
        this.textXPosition = 100;
        this.textYPosition = 90;
        this.textSize = 50;
        this.textColor = "yellow";
        this.value = 0;
    }

    draw() {
        drawImage(this.image,
            this.imageXPosition,
            this.imageYPosition,
            this.image.width,
            this.image.height
        );
        drawText(
            "x"+ this.value,
            this.textXPosition,
            this.textYPosition,
            this.textSize,
            this.textColor
        );
    }

    addPoints (points) {
        this.value += points;
    }
}