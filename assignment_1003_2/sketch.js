var j;
function setup() {
	createCanvas(600,600);
}
	
function draw(){
	background(255);
	var j = 100;
	for (var i = 2; i < 5; i++) {
		var mappedRot = map(10, 0, width, 0, i*PI);
		push();
		rotate(mappedRot);
		rect(0+j,50,20,40);
		pop();	
		j+=100;
		// push();
		// rotate(mappedRot);
		// rect(200,50,20,40);
		// pop();	

		// push();
		// rotate(mappedRot);
		// rect(300,50,20,40);
		// pop();
	}
}