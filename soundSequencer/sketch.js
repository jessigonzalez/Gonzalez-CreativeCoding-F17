var myShape;
var myShape2;
var myShape3;
var myShape4;
var song;
var boing;
var waterSound;
var analyzer;

function preload(){
	song = loadSound('assets/Calvin Harris - Slide (Official Audio) ft. Frank Ocean, Migos.mp3');
	boing = loadSound('assets/Boing-sound.mp3');
	waterSound = loadSound('assets/watervariations-019.wav');
}

function setup() {
	createCanvas(500,500);
	//this is an OBJECT made from the class
	
	boingAnalyzer = new p5.Amplitude();
	boingAnalyzer.setInput(boing);
	var rms = boingAnalyzer.getLevel();
	myShape = new Shape(50,250,50+(rms*150));

	myShape2 = new Shape(150,10,3);

	analyzer = new p5.Amplitude();
	analyzer.setInput(song);

	myShape3 = new Shape(350,490,3);

	waterSoundAnalyzer = new p5.Amplitude();
	waterSoundAnalyzer.setInput(waterSound);
	var rms3 = waterSoundAnalyzer.getLevel();
	myShape4 = new Shape(450,250,50+(rms3*150));

}

function draw(){
	background(161, 33, 165);
	//call a function from a class
	
	fill(255,148,0);
	myShape.display();
	//ellipse(50,250,50+(rms*250),50+(rms*250));
	// fill(255,148,0);
	// myShape.animate();
	// myShape.display();

	fill(14, 239, 70);
	myShape2.animate();
	myShape2.display();

	fill(217, 232, 20);
	var rms2 = analyzer.getLevel();
	ellipse(250,250,100+(rms2*450), 100+(rms2*450));
	// fill(217, 232, 20);
	// myShape3.animate();
	// myShape3.display();

	fill(25, 183, 183);
	myShape3.animate();
	myShape3.display();

	fill(255,0,25);
	myShape4.display();
	//ellipse(450,250,50+(rms3*250),50+(rms3*250));
	// fill(255,0,25);
	// myShape4.animate();
	// myShape4.display();
}

function keyPressed(){
	if(song.isLoaded){
		if(song.isPlaying()){
			song.stop();
		}
		else{
			song.play();
		}
	}
}

function mousePressed(){
	//if the user clicks the outer two circles
	if(myShape.contains(mouseX,mouseY)){
		boing.play();
	}

	if(myShape4.contains(mouseX,mouseY)){
		waterSound.play();
	}
}

//this is the CONSTRUCTOR for the class
function Shape(xPos,yPos,myVel) {
	this.x = xPos;
	this.y = yPos;
	this.vel = myVel;
	this.size = 45;

	this.animate = function() {
		this.y = this.y + this.vel;
		
		if(this.y>height || this.y<0){
			this.vel *=-1;
		}
	}

	this.contains = function(mX,mY){
		this.mx = mX;
		this.my = mY;
		if(dist(this.mx,this.my,this.x,this.y)<this.size){
			return true;
		}else{
			return false;
		}
	}

	this.display = function(){
		ellipse(this.x, this.y, this.size, this.size);
	}

};