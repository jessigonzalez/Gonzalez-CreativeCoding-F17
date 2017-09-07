//line(10, 20, 70, 40);

//rect(10,20,50,30);

//size(500,400);

//(centerX, xenterY, width, height)
//ellipse(200, 300, 100,70);

//triangle(50, 50, 400, 400, 500, 100);

//point(200,100);

int xPosition = 200;
size (500,400);
ellipse(300,xPosition,100,70);

println("hello world");

print("hello world");

int newxPosition = 200;
size(500,400);
background(255,0,127);

//First ellipse, cyan
noStroke();//don't want the ellipse to have an outline

fill(12,230,247);
ellipse(300,newxPosition,100,70);

//Second shape is a triangle, yellow
stroke(255,255,255);
strokeWeight(5);

fill(247,240,12);
triangle(40,50,300,400,100,200);

//Rectangle, cyan, thin outline
stroke(0,0,0);
strokeWeight(1);

fill(12,230,247);
rect(30,30,60,70);

//Draw a complex shape
fill(255,0,0);
beginShape();
vertex(50,100);
vertex(300,200);
vertex(200,300);
vertex(100,150);
vertex(80,300);
endShape(CLOSE);