// 0 = Initial Screen
// 1 = Game Screen
// 2 = Game-over Screen (WON)/(LOST)
var screen;
var bag;
var score;
var femRazor;
var femRazorX;
var femRazorY;
var maleRazor;
var maleRazorX;
var maleRazorY;
var keyCode;
var bagX;

function preload() {
	bag = loadImage('assets/paper-bag.png');
	femRazor = loadImage('assets/pinkRazor.png');
	maleRazor = loadImage('assets/blueRazor.png');
}

function setup() {
	screen = 0;
	createCanvas(800,600);
	frameRate(60);
	//background(236, 204, 255);
	femRazorX = random(100,800);
	maleRazorX = random(100,800);
	femRazorY = 0;
	maleRazorY = 0;
	score = 0;
	bagX = 400;
}	

function draw(){
	if(screen == 0){
		initScreen();
	}else if(screen == 1){
		gamePlayScreen();
	}else if (screen == 2){
		gameOverScreen();
	}
}

function initScreen(){
	screen = 0;
	background(236, 204, 255);
	textAlign(CENTER);
	fill(255, 255, 255);
	textSize(50);
	textStyle(BOLD);
	text("Let's Go Shopping!", width/2,height/2);
	textSize(35);
	textStyle(BOLD);
	textAlign(CENTER);
	text("(The Pink Tax)", (width/2),(height/2)+50);
	textSize(25);
	textAlign(CENTER);
	text("Collect the blue razors, avoid the pink ones",(width/2),(height/2)+200);
	textSize(20);
	text("Click to start",width/2, height-30);
}

function gamePlayScreen(){
	screen = 1;
	background(236, 204, 255);
	textAlign(LEFT);
	textSize(30);
	text("Score:",20,40);
	text(score,30,70);

	if(keyIsDown(LEFT_ARROW)){
		 bagX-=5;
	}
	if(keyIsDown(RIGHT_ARROW)){
		bagX+=5;
	}

	image(bag,bagX,500,100,100);
	image(femRazor,femRazorX,femRazorY,50,50);
	image(maleRazor,maleRazorX,maleRazorY,50,50);
	femRazorY+=10;
	maleRazorY+=10;
	if(maleRazorY>600){
		maleRazorX = random(100,750);
		maleRazorY = -50;
	}
	if(maleRazorY>500 && maleRazorX>bagX-30 && maleRazorX<bagX+80){
		score++;
		maleRazorY = 601;
	}
	if(femRazorY>600){
		femRazorX = random(100,750);
		femRazorY = -50;
	}
	if(femRazorY>500 && femRazorX>bagX-30 && femRazorX<bagX+80){
		score--;
		femRazorY = 601;
	}

	if(score==10 || score==-10){
		gameOverScreen();
	}
}

function gameOverScreen(){
	screen = 2;
	if(score==10){
		background(33, 183, 165);
	}
	if(score==-10){
		background(211, 12, 188);
	}
	textAlign(CENTER);
	fill(236,240,241);
	textSize(20);
	text("YOUR SCORE:",width/2,height/2 -120);
	textSize(125);
	text(score,width/2,height/2);
	textSize(10);
	if(score==10){
		text("Congradulations! You Won!",width/2,(height/2)+100);
		text("Something to keep in mind though is that the reason you won is that you saved money by buying more blue razors than pink ones.",width/2,(height/2)+125);
		text("Products aimed toured the female population often times cost more (which is ridiculous).",width/2,(height/2)+150);
		text("Women, who statistically make less money than men on average, may pay more for items marketed to them.", width/2,(height/2)+175);
	}
	if(score==-10){
		text("Whoops! You Lost.",width/2,(height/2)+100);
		text("Something to keep in mind though is that the reason you lost is that you lost money by buying more pink razors than blue ones.",width/2,(height/2)+125);
		text("Products aimed toured the female population often times cost more (which is ridiculous).",width/2,(height/2)+150);
		text("Women, who statistically make less money than men on average, may pay more for items marketed to them.",width/2,(height/2)+175);
	}
	textSize(25);
	text("Click to Restart",width/2,height-30);
}

function mousePressed(){
	if(screen == 0){
		startGame();
	}
	if(screen == 2){
		restart();
	}
}

function startGame(){
	screen = 1;
}

function gameOver(){
	screen = 2;
}

function restart(){
	score = 0;
	screen = 1;
}