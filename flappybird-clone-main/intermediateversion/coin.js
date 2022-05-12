class Coin extends GameObject {

    static spawnInterval = 1000;
    static timeSinceLastSpawn = 1000;

    constructor () {
        let drawOrder = 8;
        let tag = "coin";
        super(drawOrder, tag);
        this.sound = new Audio("../assets/sounds/coin.wav");
        this.image = new Image(60, 60);
        this.image.src = "../assets/images/coin.png";
        this.xPosition = spawnXPosition;
        this.yPosition = randomBetween(0, canvas.height);
        this.hitboxRadius = 30;
        this.xSpeed = -5;
        this.value = 1;
    }

    draw() {
        drawImage(this.image,
            this.xPosition,
            this.yPosition,
            this.image.width,
            this.image.height
        );

        if(debugModeIsOn) {
            drawCircle(
                this.xPosition, 
                this.yPosition, 
                this.hitboxRadius, 
                hitboxColor
            );
        }
    }

    update() {
        this.xPosition += this.xSpeed;

        if(this.xPosition < destructionXPosition)
        this.destroy();

        if  (
            theseCirclesCollide(
            bird.xPosition, bird.yPosition, bird.hitboxRadius,
            this.xPosition, this.yPosition, this.hitboxRadius)
            && gameState == "action") 
        {
            this.sound.play();
            score.addPoints(this.value);
            this.destroy();
        }
    }
}