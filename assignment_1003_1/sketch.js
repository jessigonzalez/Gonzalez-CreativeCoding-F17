function setup() {
	createCanvas(600,600);
}
	
function draw(){
	background(255);
/*
	push();
	translate(width*0.1,height*0.2);
	rotate(PI/3);
	rect(0,0,10,20);
	pop();

	push();
	translate(width*0.2,height*0.2);
	rotate(PI/4);
	rect(0,0,10,20);
	pop();

	push();
	translate(width*0.3,height*0.2);
	rotate(PI/5);
	rect(0,0,10,20);
	pop();
*/
	//map(value,start1,stop1,start2,stop2)
	var mappedRot = map(10, 0, width, 0, 2*PI);
	var mappedRot2 = map(10,0,width,0,PI*3);
	var mappedRot3 = map(10,0,width,0,PI*4);

	push();
	rotate(mappedRot);
	rect(100,50,20,40);
	pop();	

	push();
	rotate(mappedRot2);
	rect(200,50,20,40);
	pop();	

	push();
	rotate(mappedRot3);
	rect(300,50,20,40);
	pop();
}