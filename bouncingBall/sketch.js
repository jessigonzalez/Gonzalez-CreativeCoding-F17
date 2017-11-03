var x;
var y;
var xSpeed, ySpeed;
var sound;

function preload(){
	sound = loadSound('assets/Boing-sound.mp3');
}
function setup() {
	createCanvas(500,500);
	x = 10;
	y = 10;
	xSpeed = 5;
	ySpeed = 3;
}
	
function draw(){
	background(209, 216, 255);
	var r = 10;
	fill(14, 239, 70);
	ellipse(x,y,r,r);
	x += xSpeed;
	y += ySpeed;
	if (x>width-r || x<r) {
		xSpeed *= -1;
		if (sound.isPlaying()) { 
    		sound.stop();
    	}else{
    		sound.play();
    	}
	}
	if(y>height-r || y<r){
		ySpeed *=-1;
		if (sound.isPlaying()) { 
    		sound.stop();
    	}else{
    		sound.play();
    	}
	}
}
		