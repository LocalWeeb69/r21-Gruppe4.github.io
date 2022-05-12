const canvas = document.body.appendChild(
    document.createElement("canvas")
);

const context = canvas.getContext("2d");

// ideal screen dimensions 1920 x 1080
canvas.width = 1920;
canvas.height = 1080;

// make variables for calculating delta time
let timeOfLastFrame = new Date().getTime();
let timeOfCurrentFrame = 0;
let timeSinceLastFrame = 10;
    
function theseCirclesCollide(
    circleOneX, circleOneY, circleOneRadius,
    circleTwoX, circleTwoY, circleTwoRadius) {

    let distance = calculateDistance(
        circleOneX, circleOneY, circleTwoX, circleTwoY
    );
    if(distance < circleOneRadius + circleTwoRadius)
        return true;
    else
        return false;
}

function calculateDistance (pointOneX, pointOneY, pointTwoX, pointTwoY) {
    // calculate the length of each side of the "triangle"
    let a = Math.abs(pointOneX - pointTwoX);
    let b = Math.abs(pointOneY - pointTwoY);
    // use the potagorean theorem to calculate the distance
    let cSquared = (a*a) + (b*b);
    return Math.sqrt(cSquared);
}

function fillCanvas (color) {
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function randomBetween(min, max) {
    return Math.random()*(max - min)+min;
}

function drawCircle (xPosition, yPosition, radius, color) {
    context.strokeStyle = color; 
    context.beginPath();
    context.arc(
        xPosition,
        yPosition,
        radius,
        0, 2 * Math.PI
    );
    context.stroke();
}

function drawImage (image, xPositon, yPosition, width, height) {
    context.drawImage(image, xPositon-width/2, yPosition-height/2, width, height);
}

function drawText (text, xPosition, yPosition, size, color) {
    context.font = "" + size + "px Comic Sans MS";
    context.fillStyle = color;
    context.fillText(text, xPosition, yPosition); 
}

Array.prototype.remove = function (elementToRemove) {
    let result = [];
    for(let element of this) {
        if(element != elementToRemove) {
            result.push(element);
        }
    }
    return result;
} 
