function setup() {
	createCanvas(600,500);
}
	
function draw(){
	//underlapping shapes
	noStroke();
	fill(154,205,50);
	arc(185, 90, 250, 250, HALF_PI, PI);

	noStroke();
	fill(244,164,47);
	rect(186,90,126,126);

	noStroke();
	fill(30,144,255);
	arc(313, 216, 252, 252, -HALF_PI, 0);

	noStroke();
	fill(220,20,60);
	arc(312, 218, 250, 245, HALF_PI, PI);

	noStroke();
	fill(64,224,208);
	rect(314,218,124,124);

	noStroke();
	fill(186,85,211);
	arc(439, 342, 250,255, -HALF_PI, 0);

	// bottom left
	r1 = 255;
	g1 = 0;
	b1 = 0;	
	width1 = 200;
	height1 = 200;
	for (i = 0; i < 20; i++) {
		stroke(255,255,255);
		fill(r1,g1,b1);
		arc(175, 100, width1, height1, HALF_PI, PI);
		r1-=65;
		g1+=25;
		b1+=90;
		width1-=10;
		height1-=10;
	}
	//top left
	r2 = 0;
	g2 = 200;
	b2 = 50;
	width2 = 200;
	height2 = 200;
	for(j = 0; j < 20; j++) {
		stroke(255,255,255);
		fill(r2,g2,b2);
		arc(300, 200, width2, height2, -PI, -HALF_PI);
		r2+=30;
		g2-=5;
		b2+=175;
		width2-=10;
		height2-=10;
	}
	//bottom right
	r3 = 255;
	g3 = 0;
	b3 = 0;
	width3 = 200;
	height3 = 200;
	for(k = 0; k < 20; k++) {
		stroke(255,255,255);
		fill(r3,g3,b3);
		arc(200, 100, width3, height3, 0, HALF_PI);
		r3-=65;
		g3+=25;
		b3+=90;
		width3-=10;
		height3-=10;
	}	
	//bottom left
	r4 = 0;
	g4 = 200;
	b4 = 50;	
	width4 = 200;
	height4 = 200;
	for (l = 0; l < 20; l++) {
		stroke(255,255,255);
		fill(r4,g4,b4);
		arc(300, 225, width4, height4, HALF_PI, PI);
		r4+=25;
		g4-=5;
		b4+=125;
		width4-=10;
		height4-=10;
	}
	//top right
	r5 = 255;
	b5 = 140; 
	g5 = 0;
	width5 = 200;
	height5 = 200;
	for (m = 0; m < 20; m++){
		stroke(255,255,255);
		fill(r5,g5,b5);
		arc(323, 200, width5, height5, -HALF_PI, 0);
		r5 -= 5;
		g5 -=25;
		b5 +=15;
		width5 -=10;
		height5 -=10;
	}
	//top left
	r6 = 30;
	g6 = 180;
	b6 = 175;
	width6 = 200;
	height6 = 200;
	for(n = 0; n < 20; n++) {
		stroke(255,255,255);
		fill(r6,g6,b6);
		arc(425, 325, width6, height6, -PI, -HALF_PI);
		r6+=50;
		g6+=5;
		b6-=35;
		width6-=10;
		height6-=10;
	}
	//bottom right
	r7 = 255;
	g7 = 140;
	b7 = 0;
	width7 = 200;
	height7 = 200;
	for(o = 0; o < 20; o++) {
		stroke(255,255,255);
		fill(r7,g7,b7);
		arc(325, 225, width7, height7, 0, HALF_PI);
		r7-=5;
		g7-=25;
		b7+=15;
		width7-=10;
		height7-=10;
	}	
	//top right
	r8 = 30;
	b8 = 180; 
	g8 = 175;
	width8 = 200;
	height8 = 200;
	for (p = 0; p < 20; p++){
		stroke(255,255,255);
		fill(r8,g8,b8);
		arc(450, 325, width8, height8, -HALF_PI, 0);
		r8+=50;
		g8+=5;
		b8-=35;
		width8 -=10;
		height8 -=10;
	}
}
