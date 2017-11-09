var myData;
var thisElement;
function preload() {

	myData = loadJSON("assets/nyc_neighborhood_zips.json");
}

function setup() {
	//put setup code here
	createCanvas(720, 400);
	noStroke();

	var numElements = 179;
	

	var elementName = myData.neighborhoods[0].neighborhood;

	var thisElement = [];

	for(var i = 0; i < myData.neighborhoods.length; i++){
		print(myData.neighborhoods[i].zips.length);
		thisElement[i] = (myData.neighborhoods[i].zips.length);
	}

}
	
function draw(){
	background(100);
	nycChart(300, thisElement);
}

function nycChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < myData.neighborhoods.length; i++) {
    var grey = map(i, 0, myData.length, 0, 255);
    fill(grey);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(thisElement[i]));
    lastAngle += radians(thisElement[i]);
  }
}