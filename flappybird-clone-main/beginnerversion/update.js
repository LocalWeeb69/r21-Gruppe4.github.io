// execute the update function every 10 milliseconds
function update() {
    
    fillCanvas("rgb(00, 00, 99)");

    console.log(nicemode);

    drawImage(
        backgroundimage,
        backgroundXpostion,
        backgroundYpostion,
        backgroundimage.width,
        backgroundimage.height
    );

    if(moon == true){
        drawmoon();
    }
    

    // for every star
    for(let star of stars) {
        // draw the star
        drawImage(
            starimage,
            star.xPosition,
            star.yPosition,
            starimage.width,
            starimage.height
        );
        
        // update the x position of the star
        star.xPosition += starXSpeed;
        // remove star if it moves beyond the destruction point
        if(star.xPosition < destructionXPosition) {
            stars = stars.remove(star);
        }

    }
    // spawn a new star when the it is time
    starTimeSinceLastSpawn += timeSinceLastFrame;
    if(starTimeSinceLastSpawn>starSpawnInterval) {
        stars.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height/3), 
        });
        starTimeSinceLastSpawn = 0;
    }    
    
    

            // for every cloud
    for(let cloud of clouds) {
        // draw the cloud
        drawImage(
            cloudImage,
            cloud.xPosition,
            cloud.yPosition,
            cloudImage.width,
            cloudImage.height);
        
        // update the x position of the cloud
        cloud.xPosition += cloudXSpeed;
        // remove cloud if it moves beyond the destruction point
        if(cloud.xPosition < destructionXPosition) {
            clouds = clouds.remove(cloud);
        }

    }
    // spawn a new cloud when the it is time
    cloudTimeSinceLastSpawn += timeSinceLastFrame;
    if(cloudTimeSinceLastSpawn>cloudSpawnInterval) {
        clouds.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height/2), 
        });
        cloudTimeSinceLastSpawn = 0;
    }    

   


     // Building
    for(let B2 of B2s) {
        // draw the building
        drawImage(
            B2image,
            B2.xPosition,
            B2.yPosition,
            B2image.width,
            B2image.height);
    
        // update the x position of the building
        B2.xPosition += B2XSpeed;
        // remove building if it moves beyond the destruction point
        if(B2.xPosition < destructionXPosition) {
        B2s = B2s.remove(B2);
        }
    }

    // spawn a new building when the it is time
    B2TimeSinceLastSpawn += timeSinceLastFrame;
    if(B2TimeSinceLastSpawn>B2SpawnInterval) {
        B2s.push({
            xPosition: spawnXPosition,
            yPosition: 755, 
        });
        B2TimeSinceLastSpawn = 0;
    }    

   

    // Building
    for(let B1 of B1s) {
        // draw the building
        if(nicemode == 0){drawImage(
            B1image,
            B1.xPosition,
            B1.yPosition,
            B1image.width,
            B1image.height);
        }
        // update the x position of the building
        B1.xPosition += B1XSpeed;
        // remove building if it moves beyond the destruction point
        if(B1.xPosition < destructionXPosition) {
        B1s = B1s.remove(B1);
        }

    }
    // spawn a new building when the it is time
    B1TimeSinceLastSpawn += timeSinceLastFrame;
    if(B1TimeSinceLastSpawn>B1SpawnInterval) {
        B1s.push({
            xPosition: spawnXPosition,
            yPosition: 880, 
        });
        B1TimeSinceLastSpawn = 0;
    }    
    // Building
    for(let B3 of B3s) {
        // draw the building
        if(nicemode == 0){drawImage(
            B3image,
            B3.xPosition,
            B3.yPosition,
            B3image.width,
            B3image.height);
        }
        // update the x position of the building
        B3.xPosition += B3XSpeed;
        // remove building if it moves beyond the destruction point
        if(B3.xPosition < destructionXPosition) {
            B3s = B3s.remove(B3);
        }

    }
    
    // spawn a new building when the it is time
    B3TimeSinceLastSpawn += timeSinceLastFrame;
    if(B3TimeSinceLastSpawn>B3SpawnInterval) {
        B3s.push({
            xPosition: spawnXPosition,
            yPosition: 880, 
        });
        B3TimeSinceLastSpawn = 0;
    }    

    // Building
    for(let B4 of B4s) {
        // draw the building
        if(nicemode == 0){ drawImage(
            B4image,
            B4.xPosition,
            B4.yPosition,
            B4image.width,
            B4image.height);
        }

        // update the x position of the building
        B4.xPosition += B4XSpeed;
        // remove building if it moves beyond the destruction point
        if(B4.xPosition < destructionXPosition) {
            B4s = B4s.remove(B4);
        }

    }
    
    // spawn a new building when the it is time
    B4TimeSinceLastSpawn += timeSinceLastFrame;
    if(B4TimeSinceLastSpawn>B4SpawnInterval) {
        B4s.push({
            xPosition: spawnXPosition,
            yPosition: 917, 
        });
        B4TimeSinceLastSpawn = 0;
    }    
    // draw the bird image
        drawImage(birdImage,
            birdXPosition,
            birdYPosition,
            birdImage.width,
            birdImage.height
        );


    // draw the bird hitbox if debugmode is on
    if(debugModeIsOn) {
        drawCircle(
            birdXPosition, 
            birdYPosition, 
            birdHitboxRadius, 
            hitboxColor
        );
    }

    // update the bird movement
    birdYSpeed += birdYAccelleration;
    birdYPosition += birdYSpeed;

    if (gameState == "action") {
        // end the game if the bird touches the canvas edge
        if(canvas.height < birdYPosition || birdYPosition < 0) {
            gameOverSound.play();
            birdCanFlap = false;
            gameState = "gameover";
        }
    }

    // for each coin
    for(let coin of coins) {
        // draw the coin
        drawImage(coinImage,
            coin.xPosition,
            coin.yPosition,
            coinImage.width,
            coinImage.height
        );

        if(debugModeIsOn) {
            drawCircle(
                coin.xPosition, 
                coin.yPosition, 
                coinHitboxRadius, 
                hitboxColor
            );
        }

        // move the coin
        coin.xPosition += coinXSpeed;


        if(gameState == "action") {
            // check if the coins collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                coin.xPosition,
                coin.yPosition,
                coinHitboxRadius
            )) 
            { // if they do, increase the score
                coinSound.play();
                scoreValue += coinValue;
                coins = coins.remove(coin);
            }
        }

         // remove coin if it goes off the screen
         if(coin.xPosition < destructionXPosition) {
            coins = coins.remove(coin);
        }
    }

    // spawn new coins
    if(gameState == "action" &&
    coinTimeSinceLastSpawn>coinSpawnInterval) {
        coins.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        coinTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        coinTimeSinceLastSpawn += timeSinceLastFrame;
    }

    updatediamond();

    

    // for each fireball
    for(let fireball of fireballs) {
        // draw the fireball
        drawImage(fireballImage,
            fireball.xPosition,
            fireball.yPosition,
            fireballImage.width,
            fireballImage.height
        );

        if(debugModeIsOn) { // draw the hotbox
            drawCircle(
                fireball.xPosition, 
                fireball.yPosition, 
                fireballHitboxRadius, 
                hitboxColor
            );
        }

        // move the fireball
        fireball.xPosition += fireballXSpeed;

        // remove fireball if it goes off the screen
        if(fireball.xPosition < destructionXPosition) {
            fireballs = fireballs.remove(fireball);
        }

        if(gameState == "action") {
            // check if the fireball collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                fireball.xPosition,
                fireball.yPosition,
                fireballHitboxRadius
            )) 
            { // if they do, end the game
                birdCanFlap = false;
                gameOverSound.play();
                gameState = "gameover";
            }
        }
    }

    // spawn new fireballs
    if(gameState == "action" &&
    fireballTimeSinceLastSpawn>fireballSpawnInterval) {
        fireballs.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        fireballTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        fireballTimeSinceLastSpawn += timeSinceLastFrame;
    }


    //draw the scoreboard
    drawImage(
        scoreImage,
        scoreImageXPosition,
        scoreImageYPosition,
        scoreImage.width,
        scoreImage.height
    );
    drawText(
        "x"+ scoreValue,
        scoreTextXPosition,
        scoreTextYPosition,
        scoreTextSize,
        scoreTextColor
    );

    // draw the menu text
    if(gameState == "menu") {
        drawText (
            menuFirstText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(gameState == "action" && birdYAccelleration == 0) {
        drawText (
            menuSecondText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    // draw the game over text
    if(gameState == "gameover") {
        drawText (
            gameOverText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(debugModeIsOn) {
        drawText(
            "timeSinceLastFrame: " + timeSinceLastFrame,
            canvas.width/2,
            20,
            12,
            "black"
        );
    }


    if(scoreValue>=25){
        fireballXSpeed = -7.5;
        fireballSpawnInterval = 1750;
    };

    if(scoreValue>=50 && nicemode == 1 ){
        fireballXSpeed = -10.5;
        fireballSpawnInterval = 1500;
    };

    if(scoreValue>=50 && nicemode == 0){
        fireballImage.src = "../assets/images/blue_fireball.png";
        fireballXSpeed = -10.5;
        fireballSpawnInterval = 1500;
    };

    if(scoreValue==69){
        fireballXSpeed = -20.5;
        fireballImage.src = "../assets/images/nice.png";
    }

    if(scoreValue>=70 && nicemode == 0){
        fireballXSpeed = -10.5;
        fireballImage.src = "../assets/images/blue_fireball.png"
    }

    if(scoreValue>=70 && nicemode == 1){
        fireballXSpeed = -10.5;
    }

    if(scoreValue>=75){
        fireballXSpeed = -12.5;
        fireballSpawnInterval = 1250;
    }

    if(scoreValue>=100){
        fireballXSpeed = -15.5;
        fireballSpawnInterval = 1000;
    }

    if(scoreValue>=200){
        fireballXSpeed = -20;
        fireballSpawnInterval = 500;
    }

    if(scoreValue>=300){
        fireballXSpeed = -30
        fireballSpawnInterval = 150;
    }


    if(nicemode==1){
        fireballImage.src = "../assets/images/nice.png";
        moon = false;
        backgroundimage.src = "../assets/images/weed.jpg";
        scoreImage.src = "../assets/images/WeedCoin.png";
        DiamondImage.src = "../assets/images/MD.png";
        birdImage.src = "../assets/images/SnoopD.png";
        starimage.src = "../assets/images/illuminati.png";
        cloudImage.src = "../assets/images/smoke.png";
        B2image.src ="../assets/images/blunt.png"
    }
    
    // update timeSinceLastFrame and draw next frame
    timeOfCurrentFrame = new Date().getTime();
    timeSinceLastFrame = timeOfCurrentFrame - timeOfLastFrame;
    timeOfLastFrame = timeOfCurrentFrame;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);


function updatediamond(){
    if(gameState == "menu"){
        DiamondXPosition = spawnXPosition
    }
    
    
    if(gameState == "action"){
        
        DiamondXPosition += DiamondXSpeed;
        
        drawImage(
        DiamondImage,
        DiamondXPosition,
        DiamondYPosition,
        DiamondImage.width,
        DiamondImage.height
        );
        if(DiamondXPosition < -100) {
            DiamondXPosition = spawnXPosition;
            DiamondYPosition = randomBetween(0,canvas.height)
        }
        if(theseCirclesCollide(
            birdXPosition,
            birdYPosition,
            birdHitboxRadius,
            DiamondXPosition,
            DiamondYPosition,
            DiamondHitboxRadius
        )){
        
            DiamondXPosition = canvas.width * 1.2
            DiamondYPosition = randomBetween(0,canvas.height)
            scoreValue += DiamondValue
           
        }
    }
    if(gameState == "gameover"){
        drawImage(
            DiamondImage,
            DiamondXPosition,
            DiamondYPosition,
            DiamondImage.width,
            DiamondImage.height);
            
            
     DiamondXPosition += DiamondXSpeed;
    }
}
