//game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
music.loop = true;
music.volume = 0.5;
const timeBetweenUpdates = 10; //milliseconds
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover


//make the bird
let bird = new Bird();

// create the scoreboard
let score = new Score ();

// create 3 clouds cloud
new Cloud();
new Cloud(spawnXPosition-500);
new Cloud(spawnXPosition-1000);

// create menu texts
let startText = new TextObject(
    "Press " + startKey + " to start" // text
);

let flapText = new TextObject(
    "Press space to flap wings"
);
flapText.isActive = false;

let gameOverText = new TextObject (
    "Press " + restartKey + " to restart"
);
gameOverText.isActive = false;


