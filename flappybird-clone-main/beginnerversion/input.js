document.addEventListener("keydown", function(event) {
    
    // start the game if the startkey is pressed
    if(gameState == "menu" && event.key == startKey) {
        if (music.paused) music.play();
        gameState = "action";
        birdCanFlap = true;
        return; 
    }

    // flap the wings of the bird if the flapkey is pressed
    if (gameState == "action" && event.key == birdFlapKey && birdCanFlap == true) {
        if(birdYAccelleration == 0) birdYAccelleration = birdBeginningYAccelleration;
        birdYSpeed = birdFlapForce;
        birdCanFlap = false;
        birdFlapSound.currentTime = 0.1;
        birdFlapSound.play();
        return;
    }


    if(gameState == "action" && event.key == selvmordkey){
        // if they do, end the game
        birdCanFlap = false;
        gameOverSound.play();
        gameState = "gameover";
        return;
    }
    
    if(nicekey == 1 && event.key == testkey2){
        nicemode = 1
        music.src = "../assets/sounds/Snoop.mp3";   
        music.play();
        music.volume = 1;
    };

    if(event.key == testkey){
        nicekey = 1
    };

    if(nicemode==0){
        music.src =  "../assets/sounds/music.mp3";
        music.play();
    };

    // reset the game if the restart key is pressed
    if(gameState == "gameover" && event.key == restartKey) {
        gameState = "menu";
        birdYPosition = birdStartYPosition;
        birdYSpeed = birdStartYSpeed;
        birdYAccelleration = birdStartYAccelleration;
        birdCanFlap = false;
        fireballs = [];
        fireballTimeSinceLastSpawn = fireballSpawnInterval;
        scoreValue = 0;
        coins = [];
        fireballImage.src = "../assets/images/fireball.png";
        fireballXSpeed = -5.5;
        fireballSpawnInterval = 2000;
        nicekey = 0;
        nicemode = 0;
        moon=true;
        backgroundimage.src = "../assets/images/baggrund.png";
        scoreImage.src = "../assets/images/music_note.png";
        DiamondImage.src = "../assets/images/Diamond.png";
        birdImage.src = "../assets/images/bird.png";
        starimage.src = "../assets/images/star.png";
        cloudImage.src = "../assets/images/cloud.png";
        B2image.src = "../assets/images/new_building_1.png";
        music.src = "../assets/sounds/music.mp3";
        music.play();
        music.volume = 0.5;
        return; 
    }

});



document.addEventListener("keyup", function(event) {

    // make the bird able to flap again if the flapkey is released
    if (gameState == "action" && event.key == birdFlapKey) {
        birdCanFlap = true;
        return;
    }

});