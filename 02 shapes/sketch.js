// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2
  y = height/2
  xSpeed = random(-3,3);
  ySpeed = random(-3,3);
  background(255)
  noStroke();
}

function draw() {
  background(220);
  ellipse(MOUSEx,MOUSEY,25,25)
  x += xSpeed
  y += ySpeed
  dill(random(255), random(255), random(255))

}
function mousePressed(){
  fill (255,0,0);
  xSpeed = random(-3,3);
  ySpeed = random(-3,3);
}
function mouseReleased(){fill(0,0,255);}


