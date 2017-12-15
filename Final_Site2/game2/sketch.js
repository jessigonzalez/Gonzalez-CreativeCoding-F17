var x = 0;
var y = 0;
var squaresize = 100;

var clicks = 30;

var bossGuy;

function preload(){
  bossGuy = loadImage('assets/boss.png');
}
function setup(){
  createCanvas(500, 500);
  centerCanvas();
  frameRate(30);
}

function draw(){
  if (screen == 0){
    background(255);
    timer = timer - (1/30);
    sqTimer = sqTimer + (1/30);
    
    if (sqTimer < 1){
      if (x < width - squaresize){
        x = x + (5 * sqTimer);
      }
      if (y > 0){
        y = y - 2;
      }
    }
    else{
      if (x > 0){
        x = x - 2;
      }
      if (y < height - squaresize){
        y = y + (5 * sqTimer);
      }
    }
    
    // randomly change square position every 1 seconds
    if (sqTimer > 2){
      sqTimer = 0;
      x = random(width - squaresize);
      y = random(0, height - squaresize);
    }
    
    if (bossGuy.width > 0){
      image(bossGuy, x, y, squaresize, squaresize);
    }
    
    fill(0);
    textSize(20);
    textStyle(BOLD);
    text("TIME: " + int(timer), 250, 450);
    text("CLICKS: " + clicks, 250, 475);
  
    if (timer < 0){
      if (clicks <= 0){
        screen = 1;
      }
      else{
        screen = 2;
      }
    }
  }
  if (screen == 2){
      background(211, 12, 188);
      textAlign(CENTER);
      textSize(50);
      fill(236,240,241);
      text("You Lost, Sorry",width/2, (height/2)-50);
  }
  if (screen == 1){
      background(33, 183, 165);
      textAlign(CENTER);
      textSize(50);
      fill(236,240,241);
      text("Congrats, You Won", width/2, (height/2)-50);
  }
}

function mouseReleased(){
  if (clicks > 0){
    if (mouseX > x && mouseY > y 
      && mouseX < (x + squaresize)
      && mouseY < (y + squaresize)){
        clicks = clicks - 1;
        squaresize = squaresize * 0.95;
    }
  }
}