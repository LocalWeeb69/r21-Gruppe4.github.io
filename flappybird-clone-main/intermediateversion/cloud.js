class Cloud extends GameObject {

    static timeSinceLastSpawn = 0; // milliseconds
    static spawnInterval = 10000; // milliseconds

    constructor (xPosition) {
        let drawOrder = 0;
        super(drawOrder);
        this.image = new Image(200, 200);
        this.image.src = "../assets/images/cloud.png";
        this.xPosition = xPosition == undefined ? spawnXPosition : xPosition;
        this.yPosition = randomBetween(0, canvas.height/2); 
        this.xSpeed = -.7;
    }

    draw() {
        drawImage(
            this.image,
            this.xPosition,
            this.yPosition,
            this.image.width,
            this.image.height
        );
    }

    update() {
        //move cloud to the left
        this.xPosition += this.xSpeed;

        //destroy cloud if it moves too far left
        if(this.xPosition < destructionXPosition) {
            this.destroy();
        }
    }
}