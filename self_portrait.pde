//self-portrait sketch

int newxPosition = 200;
size(450,400);
background(120,0,127);

//hair
noStroke();
fill(130,65,15);
ellipse(170,140,55,55);
ellipse(140,160,45,45);
//ellipse(255,120,65,65);
ellipse(320,200,55,55);
ellipse(325,160,25,25);
ellipse(300,140,55,55);

//First ellipse, cyan
noStroke();//don't want the ellipse to have an outline
fill(12,230,247);
ellipse(240,newxPosition,150,150);

//more hair
noStroke();
fill(139,69,19);
ellipse(260,113,50,50);
ellipse(222,118,58,58);
ellipse(170,140,55,55);
ellipse(160,180,45,45);
ellipse(150,225,58,58);
ellipse(125,190,15,15);
ellipse(160,280,59,59);
ellipse(120,268,25,25);
ellipse(130,295,45,45);
ellipse(145,325,20,20);
ellipse(325,255,55,55);
ellipse(335,295,45,45);
ellipse(300,295,20,20);
ellipse(295,265,10,10);
ellipse(290,275,15,15);
ellipse(312,315,10,10);

//eyes
stroke(0,0,0);
strokeWeight(5);
fill(255,255,255);
ellipse(280,200,50,50);

noStroke();
fill(140,70,25);
ellipse(280,200,15,15);

stroke(0,0,0);
strokeWeight(5);
fill(255,255,255);
ellipse(215,200,50,50);

noStroke();
fill(140,70,25);
ellipse(215,200,15,15);

//mouth
noFill();
stroke(240,0,0);
arc(240, 235, 50, 50, PI / 3, 3* PI/3); // lower quarter circle 