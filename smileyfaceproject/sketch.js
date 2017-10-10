//partner: Clara
//variables made to change the backgrounds color
var r= 150;
var g= 50;
var b= 250;
var xCol; 
var yCol;

function setup(){
  createCanvas(600,600);
}

function draw(){
  //backgrounds color affected by where the user presses their mouse
  r,g,b = mouseX/3;
  background (r,g,b);
  //smily face drawings are also affected by where the mouse is pressed
  if(mouseIsPressed){
    translate(width/2,height/2);
    for (var i = 0; i < 8; i++){
      push();
      rotate(QUARTER_PI * i);
      smile(mouseX,mouseY);
      for (var j = 0; j < 4; j++){
        push();
        rotate(QUARTER_PI * j/2);
        scale(0.25);
        translate(50,50);
        smile(mouseX,mouseY);
        pop();
      }
    translate();
    pop();
    }
  }
}
// three separate shape to make one shape
// two arguments 
function smile(xCol, yCol){
  stroke(xCol,yCol,0);
  noFill();
  //head
  ellipse(mouseX,mouseY,100,100);
  fill(xCol,yCol,0);
  //left eye
  ellipse(mouseX+25, mouseY-10, 10,10)
  //right eye
  ellipse(mouseX-25, mouseY-10, 10,10);
  //mouth
  arc(mouseX-10, mouseY+10, 50, 50, 0, PI);
} 