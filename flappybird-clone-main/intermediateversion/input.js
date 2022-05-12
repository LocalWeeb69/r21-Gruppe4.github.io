document.addEventListener("keydown", function(event) {
    
    // start the game if the startkey is pressed
    if(gameState == "menu" && event.key == startKey) {
        if (music.paused) music.play();
        gameState = "action";
        bird.canFlap = true;
        startText.isActive = false;
        flapText.isActive = true;
        return; 
    }

    // flap the wings of the bird if the flapkey is pressed
    if (gameState == "action" && 
    event.key == bird.flapKey && 
    bird.canFlap == true) {
        if(bird.yAccelleration == 0) bird.yAccelleration = bird.beginningYAccelleration;
        bird.flap();
        bird.canFlap = false;
        bird.flapSound.currentTime = 0.1;
        bird.flapSound.play();
        flapText.isActive = false;
        return;
    }

    // reset the game if the restart key is pressed
    if(gameState == "gameover" && event.key == restartKey) {
        gameState = "menu";
        bird.destroy();
        bird = new Bird();
        GameObject.destroyAllWithTag("fireball");
        GameObject.destroyAllWithTag("coin");
        score.value = 0;
        gameOverText.isActive = false;
        startText.isActive = true;

        return; 
    }

});

document.addEventListener("keyup", function(event) {

    // make the bird able to flap again if the flapkey is released
    if (gameState == "action" && event.key == bird.flapKey) {
        bird.canFlap = true;
        return;
    }

});