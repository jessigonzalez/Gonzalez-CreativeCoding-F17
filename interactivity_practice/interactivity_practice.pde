void setup(){
  size(600,600);
}
void draw(){
  background(200);
}
void mousePressed(){
  if(mouseX<300 && mouseY>400)
  {
    fill(0,128,128);
    rect(0,400,width/2,height/3);
  }
}
void mouseMoved(){
  if(mouseX<300 && mouseY<400){
    fill(0,0,255);
    rect(0,0,width/2,(height*2/3));
  }
  if(mouseX>300 && mouseX<450 && mouseY<=height){
    fill(255,0,0);
    rect(300,0,width/2,height);
  }
  if(mouseX>450 && mouseY<=height){
    fill(255,255,0);
    rect(0,0,width,height);
  }
}