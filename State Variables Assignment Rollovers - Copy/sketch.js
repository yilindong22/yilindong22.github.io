// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectShade = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  line(width/2,0,width/2,height)
  line(0,height/2,width,height/2)
  if(mouseX <= width/2 && mouseY <= height/2 )
   rect(0,0,width/2,height/2)
   fill(0)
  if(mouseX > width/2 && mouseY >= height/2 )
   rect(width/2,height/2,width,height)
   fill(0)
  if(mouseX <= width/2 && mouseY > height/2 )
   rect(0,height/2,width/2,height)
   fill(0) 
  if(mouseX > width/2 && mouseY < height/2 )
   rect(width/2,0,width,height/2)
   rectShade = constrain(rectShade, 0, 255)
   fill(rectShade);
   
}
