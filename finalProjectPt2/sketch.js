var bag;
var score;
var femRazor;
var femRazorX;
var femRazorY;
var maleRazor;
var maleRazorX;
var maleRazorY;

function preload() {
	bag = loadImage('assets/paper-bag.png');
	femRazor = loadImage('assets/pinkRazor.png');
	maleRazor = loadImage('assets/blueRazor.png');
}

function setup() {
	createCanvas(800,600);
	frameRate(30);
	background(236, 204, 255);
	femRazorX = random(100,600);
	maleRazorX = random(100,600);
	//femRazorX = 0;
	femRazorY = 0;
	maleRazorY = 0;
	score = 0;
}
	
function draw(){
	image(bag,mouseX,500,100,100);
	image(femRazor,femRazorX,femRazorY,50,50);
	image(maleRazor,maleRazorX,maleRazorY,50,50);
	dropStuff();
}

function dropStuff(){
	femRazorY += 15;
	maleRazorY += 15;

	//if you miss catching the razor
	if(femRazorY>600){
		femRazorX = random(100,600);
		femRazorY = -50;
	}
	//to detect if you caught the razor 
	if(femRazorY>400 && femRazorX > (mouseX-100) && femRazorX<(mouseX+250)){
		score-=1;
		femRazorY = 601;
	}

	if(maleRazor>600){
		maleRazorX = random(100,600);
		maleRazorY = -50;
	}

	if(maleRazorY>40 && maleRazorX >(mouseX-100) && maleRazorX<(mouseX+250)){
		score+=1;
		maleRazorY = 601;
	}


	// if(femRazorX>mouseX && femRazorX<mouseX+50 && femRazorY>500){
	// 	score = score+1;
	// 	femRazorY = 0;
	// 	femRazorX = random(0,800);
	// }

	// if(maleRazorX>mouseX && maleRazorX<mouseX+50 && maleRazorY>500){
	// 	score = score-1;
	// 	maleRazorY = 0;
	// 	maleRazorX = random(0,800);
	// }
	textSize(30);
	text("Score:",20,40);
	text(score,30,70);
}