class Bird extends GameObject {

    // constructor for a bird object
    constructor () {
        let drawOrder = 5;
        super(drawOrder);
        this.xPosition = 250;
        this.yPosition = 250;
        this.ySpeed = 0;
        this.beginningYAccelleration = 0.7;
        this.yAccelleration = 0;
        this.hitboxRadius = 30;
        this.image = new Image(90, 90);
        this.image.src = "../assets/images/bird.png";
        this.flapSound = new Audio("../assets/sounds/flap.wav");
        this.flapForce = -12;
        this.flapKey = " ";
        this.canFlap = false;
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

    update () {

        if (gameState == "action" || gameState == "gameover") {
            this.ySpeed += this.yAccelleration;
            this.yPosition += this.ySpeed;
        }

        if((canvas.height < this.yPosition ||
        this.yPosition < 0) && gameState == "action") {
            this.canFlap = false;
            gameOverSound.play();
            gameState = "gameover";
            flapText.isActive = false;
            gameOverText.isActive = true;
        }
        
    }

    flap () {
        this.ySpeed = this.flapForce;
    }
}
