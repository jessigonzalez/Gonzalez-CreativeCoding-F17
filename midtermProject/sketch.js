var r,g,b;
var r2,g2,b2;
var r3,g3,b3;
var big;
var med;
var small;
var s;
var yPos = 450;
var diam =  5;
function setup() {
	createCanvas(600,500);
	r = random(255);
	g = random(255);
	b = random(255);
	r2 = random(255);
	g2 = random(255);
	b2 = random(255);
	r3 = random(255);
	g3 = random(255);
	b3 = random(255);
}
	
function draw(){
	scene();
	
	for (var j = 0; j < width; j++) {
		ellipse((j*10)+5,yPos,diam,diam);
	}
}

function scene(){
 	noStroke();
	background(0,0,0);
	//big white circle
	push();
	fill(r,g,b,250);
	scale(s);
	big = ellipse(360, 210, 175, 175);
	pop();

	//big rectangle
	fill(64,68,76);
	rect(150,300, 300, 40);

	//little black circle inside white circle
	push();
	fill(r2,g2,b2,250);
	scale(s);
	small = ellipse(400, 205, 25, 25);
	pop();

	//rectangle underneath
	fill(145,156,173);
	rect(390,217, 35, 8);

	//grey cricle next to bigger circles
	push();
	fill(r3,g3,b3,250);
	scale(s);
	med = ellipse(480, 337, 35, 35);
	pop();

	//rectangle underneath
	fill(64,68,76);
	rect(465,355, 55, 12);
}

function mousePressed(){
	var a = dist(mouseX,mouseY,360,210);
	var b = dist(mouseX,mouseY,400,205);
	var c = dist(mouseX,mouseY,480,337);
	if(a<110){
		r = random(255);
		g = random(255);
		b = random(255);
	}
	else{
		r = 239;
		g = 238;
		b = 220;
	}
	if(b<100){
		r2 = random(255);
		g2= random(255);
		b2 = random(255);
	}
	else{
		r2 = 0;
		g2 = 0;
		b2 = 0;
	}
	if(c<25){
		r3 = random(255);
		g3 = random(255);
		b3 = random(255);
	}
	else{
		r3 = 145;
		g3 = 156;
		b3 = 173;
	}
}

function keyPressed(){
	s = random(1.5);
}
