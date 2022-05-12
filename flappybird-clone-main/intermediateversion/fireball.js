class Fireball extends GameObject {

    static spawnInterval = 2000;
    static timeSinceLastSpawn = 2000;

    constructor () {
        let drawOrder = 9;
        let tag = "fireball";
        super(drawOrder, tag);
        this.image = new Image(350, 350);
        this.image.src = "../assets/images/fireball.png";
        this.xPosition = spawnXPosition;
        this.yPosition = randomBetween(0, canvas.height);
        this.xSpeed = -5.5;
        this.hitboxRadius = 100;
    }

    draw() {
        drawImage(
            this.image,
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

        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }

        if  (
            theseCirclesCollide(
            bird.xPosition, bird.yPosition, bird.hitboxRadius,
            this.xPosition, this.yPosition, this.hitboxRadius)
            && gameState == "action") 
        {
            bird.canFlap = false;
            gameOverSound.play();
            flapText.isActive = false;
            gameOverText.isActive = true;
            gameState = "gameover";
        }
    }

    static getRandomYPosition() {
        return Utility.randomBetween(0, Canvas.getHeight());
    }

}