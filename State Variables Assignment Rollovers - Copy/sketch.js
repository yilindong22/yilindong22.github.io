// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectShade = 0;
let quadrant = 1;
let q1Fill = 255;
let q2Fill = 255;
let q3Fill = 255;
let q4Fill = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);

}


function determineQuadrant(){
	if (mouseX < width/2){
		if (mouseY < height/2) quadrant = 1;
		else quadrant = 3;
	}
	else {
		if (mouseY  < height/2) quadrant = 2 
		else quadrant = 4
	}
}

function draw() {
  background(255);
  determineQuadrant();
  line(width/2,0,width/2,height)
  line(0,height/2,width,height/2)
  if (quadrant = 1) 
     fill(0);


  
//   if (quad1 === true)
//    rect(0,0,width/2,height/2)
//    rectShade = 0
//    if(rectShade < 255)
//      fill(rectShade += 2);
//    else fill (255); 
//  if(mouseX > width/2 && mouseY >= height/2 )
//    rect(width/2,height/2,width,height)
//    fill(0)
//   if(mouseX <= width/2 && mouseY > height/2 )
//    rect(0,height/2,width/2,height)
//    fill(0) 
//   if(mouseX > width/2 && mouseY < height/2 )
//    rect(width/2,0,width/2,height/2)
fill(0);
rect(width/2,0,width/2,height/2)
}
