function setup(){
  createCanvas(600,500);
}
function draw() {
  background(200);
}
function mousePressed(){
  if(mouseX<width/2 && mouseY>height/3){
    fill(0,0,255);
    rect(0,0,width/2,(height*2)/3);
  }
}
function mouseMoved(){
  if(mouseX<width/2 && mouseY<height/3){
    fill(0,128,128);
    rect(0,height/3,width/2,height/3);
  }
  if(mouseX>width/2 && mouseX<width*(3/4) && mouseY<=height){
    fill(255,0,0);
    rect(width/2,0,width/2,height);
  }
  if(mouseX>width*(3/4) && mouseY<=height){
    fill(255,255,0);
    rect(0,0,width,height);
  }
}