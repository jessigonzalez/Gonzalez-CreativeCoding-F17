var mySound;
var loopMode = "sustain";

function preload() {
	mySound = loadSound("assets/doorbell2.mp3");
}

function setup() {
	createCanvas(500,500);
}
function draw(){
	background(255);
}
function keyPressed() {
	playMySound();
}
	 
function playMySound(){
	if (loopMode=="restart") {
 		loopMode = "sustain";
 		mySound.play();
 	} 
 	else{
 		loopMode=="sustain";
 		mySound.play();
 	}
 	mySound.playMode(loopMode);
}