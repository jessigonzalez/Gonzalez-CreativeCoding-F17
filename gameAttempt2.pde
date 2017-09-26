// initial position for our circle
int circleX = 300;
int circleY = 20;
// how much to move the circle on each frame
int moveX = 2;
int moveY = -2;
int x;
int y;
void setup() {
  size(600,600);
}
void draw() {
  background(0);
  fill(100,100,270);
  ellipse(circleX, circleY, 40, 40);
  circleX = circleX + moveX;
  circleY = circleY + moveY;
  
  if(circleX > width) {
    circleX = width;
    moveX = -moveX;
  }
  if(circleY > height) {
    circleY = height;
    moveY = -moveY;
  }
  if(circleX < 0) {
    circleX = 0;
    moveX = -moveX;
  }
  if(circleY < 0) {
    circleY = 0;
    moveY = -moveY;
  }
  x = mouseX;
  y = mouseY;
  fill(255,0,0);
  triangle(x,y,240,575,340,575);
  
  if(x == circleX){
    print("Popped");
    noLoop();
  }
   
   if(y==circleY){
     print("Popped");
     noLoop();
   }
}
/*
void mouseMoved(){
  fill(255,0,0);
  int aX = 300;
  int aY = 525;
  int bX = 240;
  int bY = 574;
  int cX = 340;
  int cY = 574;
  triangle(aX,aY,bX,bY,cX,cY);
}
 */
  