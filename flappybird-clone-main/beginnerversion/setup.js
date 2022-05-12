 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
let music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const testkey = "6";
const testkey2 = "9";
const selvmordkey = "p";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let moon = true
let gameState = "menu"; // menu, action or gameover

// bird variables
let birdImage = new Image(90, 90);
      birdImage.src = "../assets/images/bird.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
        music.volume = 0.5;
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;


// score variables
let scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/music_note.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// cloud variables
let cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// star variables
let starimage = new Image(50, 50);
      starimage.src = "../assets/images/star.png";
const starSpawnInterval = 7500; // milliseconds
const starXSpeed = -.5;
let starTimeSinceLastSpawn = 0; // milliseconds
let stars = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/3), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/3), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/3), 
    },
];

// building variables
const B1image = new Image(400, 400);
      B1image.src = "../assets/images/new_building_2.png";
const B1SpawnInterval = randomBetween(20500, 37500); // milliseconds
const B1XSpeed = -.35;
let B1TimeSinceLastSpawn = 0; // milliseconds
let B1s = [
    {
        xPosition: canvas.width,
        yPosition: 880, 
    },
    {
        xPosition: canvas.width -500,
        yPosition: 880, 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: 880, 
    },
];

let B2image = new Image(650, 650);
      B2image.src = "../assets/images/new_building_1.png";
const B2SpawnInterval = randomBetween(17500, 25000); // milliseconds
const B2XSpeed = -.4;
let B2TimeSinceLastSpawn = 0; // milliseconds
let B2s = [
    {
        xPosition: canvas.width,
        yPosition: 755, 
    },
    {
        xPosition: canvas.width -350,
        yPosition: 755, 
    },
    {
        xPosition: canvas.width-800,
        yPosition: 755, 
    },
];

const B3image = new Image(400, 400);
      B3image.src = "../assets/images/new_building_3.png";
const B3SpawnInterval = randomBetween(55000, 27500); // milliseconds
const B3XSpeed = -.275;
let B3TimeSinceLastSpawn = 0; // milliseconds
let B3s = [
    {
        xPosition: canvas.width -200,
        yPosition: 880, 
    },
    {
        xPosition: canvas.width -1350,
        yPosition: 880, 
    },
   
];

const B4image = new Image(350, 350);
      B4image.src = "../assets/images/new_building_4.png";
const B4SpawnInterval = randomBetween(19000, 77500); // milliseconds
const B4XSpeed = -.375;
let B4TimeSinceLastSpawn = 0; // milliseconds
let B4s = [
    {
        xPosition: canvas.width -300,
        yPosition: 917, 
    },
    {
        xPosition: canvas.width -600,
        yPosition: 917,
    },
    {
        xPosition: canvas.width -1100,
        yPosition: 917, 
    },
];

// moon variables
const moonimage = new Image(300, 300);
        moonimage.src = "../assets/images/Moon.png";
const moonimageXposition = 230;
const moonimageYposition = 160;

//bagground
let backgroundimage = new Image(1920, 1080);
        backgroundimage.src = "../assets/images/baggrund.png";
const backgroundXpostion = canvas.width/2;
const backgroundYpostion = canvas.height/2;

// fireball variables
let fireballImage = new Image(350, 350);
      fireballImage.src = "../assets/images/fireball.png";
let fireballXSpeed = -5.5;
const fireballHitboxRadius = 100;
let fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// Diamond variables
const DiamondSound = coinSound;
let DiamondImage = new Image(60,60);
      DiamondImage.src = "../assets/images/Diamond.png"
const DiamondHitboxRadius = 30;
const DiamondXSpeed = -5;
const DiamondSpawnInterval = 5000;
const DiamondValue = 5;
let DiamondXPosition = canvas.width
let DiamondYPosition = randomBetween(0,canvas.height);
let DiamondTimeSinceLastSpawn = DiamondSpawnInterval
let Diamond = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";

function drawmoon(){

        drawImage(
            moonimage,
            moonimageXposition,
            moonimageYposition,
            moonimage.width,
            moonimage.height
        );
}

//tiny secret
let nicekey = 0
let nicemode = 0