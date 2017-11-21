var r,g,b;
var r2,g2,b2;
var r3,g3,b3;
var big;
var med;
var small;
var s;
var yPos = 450;
var diam =  5;

var slider1,slider2,slider3;
var colorSlider1,colorSlider2,colorSlider3;

function setup() {
	canvas = createCanvas(600,500);
	canvas.position(10,10);
	background(0,0,0);

	r = 239;
	g = 238;
	b = 220;
	
	r2 = 0;
	g2 = 0;
	b2 = 0;

	r3 = 145;
	g3 = 156;
	b3 = 173;

	slider1 = createSlider(50,200,100);
	slider1.position(50,550);

	slider2 = createSlider(50,200,100);
	slider2.position(250,550);

	slider3 = createSlider(50,200,100);
	slider3.position(450,550);

	colorSlider1 = createSlider(50,255,50);
	colorSlider1.position(650, 100);

	colorSlider2 = createSlider(50,255,50);
	colorSlider2.position(650, 150);

	colorSlider3 = createSlider(50,255,50);
	colorSlider3.position(650, 200);
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
	if(colorSlider1.value()>50){
		r = colorSlider1.value();
		g = g-(random(255)/100);
		b = b+(random(255)/25);
	}
	fill(r,g,b,250);
	s1 = slider1.value();
	//update the size of the animating shape
	scale(s1/100);
	big = ellipse(360, 210, 175, 175);
	pop();

	//big rectangle
	fill(64,68,76);
	rect(150,300, 300, 40);

	//little black circle inside white circle
	push();
	if(colorSlider2.value()>50){
		r2 = r2+(random(255)/75);
		g2 = colorSlider2.value();
		b2 = b2+(random(255)/25);
	}
	fill(r2,g2,b2,250);
	s2 = slider2.value();
	scale(s2/100);
	small = ellipse(400, 205, 25, 25);
	pop();

	//rectangle underneath
	fill(145,156,173);
	rect(390,217, 35, 8);

	//grey cricle next to bigger circles
	push();
	if(colorSlider3.value()>50){
		r3 = r3-(random(255)/150);
		g3 = g3+(random(255)/25);
		b3 = colorSlider3.value();
	}
	fill(r3,g3,b3,250);
	s3 = slider3.value();
	scale(s3/100);
	med = ellipse(480, 337, 35, 35);
	pop();

	//rectangle underneath
	fill(64,68,76);
	rect(465,355, 55, 12);
}

