// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quadrant = 0;
let q1Fill = 255;
let q2Fill = 255;
let q3Fill = 255;
let q4Fill = 255;
function setup() {
	createCanvas(windowWidth, windowHeight);

}


function determineQuadrant() {
	if (mouseX < width / 2) {
		if (mouseY < height / 2) quadrant = 1;
		else quadrant = 3;
	}
	else {
		if (mouseY < height / 2) quadrant = 2
		else quadrant = 4
	}
}

function draw() {
	background(255);
	determineQuadrant();
	line(width / 2, 0, width / 2, height)
	line(0, height / 2, width, height / 2)
	// quadrant 1 :
	if (quadrant === 1) {
	   q1Fill = 0;
	   if (mouseClicked){
	     q1Fill = 0;
	     q2Fill = 0;
	     q3Fill = 0;
	     q4Fill = 0;
	   
	         
	   }
		
	}
	else {
		q1Fill += 5;
		
	}
	fill(q1Fill,255,q1Fill);
	rect(0, 0, width / 2, height / 2)
	// quadrant 2 :
	
	if (quadrant === 2) {
		q2Fill = 0;
		 
	 }
	else {
		 q2Fill += 5;
	 }
	 fill(q2Fill,q2Fill,255);
	 rect(width / 2, 0, width , height / 2)
	 
	// quadrant 3: 
	 
	 if (quadrant === 3) {
		q3Fill = 0;
		 
	 }
	else {
		 q3Fill += 5;
	 }
	 fill(255,q3Fill,q3Fill);
	 rect(0, height / 2, width/2 , height) 
	// quadrant 4:
	 
	if (quadrant === 4) {
		q4Fill = 0;
		 
	 }
	else {
		 q4Fill += 5;
	 }
	 fill(q4Fill);
	 rect(width/2, height / 2, width , height) 




}
