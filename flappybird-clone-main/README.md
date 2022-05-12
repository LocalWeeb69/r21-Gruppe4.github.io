# Flappy Bird Clone
This is a worked example for the IT-subjects in highschool, especially programming. The example is inspired by the infamous game Flappy Bird and is made using Javascript and HTML Canvas.  

## Beginner Version
This version is meant for teaching basic programming concepts, such as:
- variables & constants
- strings, booleans, numbers
- arrays
- if-statements
- for-loops
- functions

Detailed descriptions of each of these concepts can be found [here](https://www.w3schools.com/js/default.asp).

This version has been divided into the following files to make it more manageable:

### index.html
To start the game, simply open this file in a browser and the game should play. This file is responsible for loading the javascript files.

### helpers.js
This file creates a HTML Canvas and attaches it to the HTML body. The Canvas is for displaying the graphics. Additionally, this file contains helper functions for drawing images and shapes on the canvas. Also, function which perform helpful calculations, such as circle collision.

### setup.js
Here all the variables for controlling the game are created and the images and sounds are loaded. For example, here we define the position, speed, flap-force and image of the bird.

### input.js
This file attaches some event-listeners to the document, defining the logic when certain input if received. For example when the the SPACE-key is pushed during the "action"-state, then the speed of the bird should change.

### update.js
This file starts an interval, which by default repeats the game-logic every 10 milliseconds. We use this to animate all the objects and check if the bird collides with anything. For example 100 times per second, we draw the bird, move it a little bit and check if it collides with the any of the coins or the fireballs.

## Intermediate Version

## Assets can be found in the assets folder and are borrowed from:
- https://freesound.org/people/DominikBraun/
- https://freesound.org/people/cabled_mess/
- https://www.pixilart.com/itzweirdali
- http://pixelartmaker.com/art/dd7ced43d912170
- http://pixelartmaker.com/art/1f25a48490aef1c
- https://freesound.org/people/OwlStorm/
