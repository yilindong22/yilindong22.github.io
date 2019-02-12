// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}
function keyTyped(){
  if (key==="a")
  rect(mouseX,mouseY,75,100);
  
  if (key==="b")
  ellipse(mouseX,mouseY,75,100);
  if (key==="d")
  arc(mouseX,mouseY,80, 80, 0, PI + QUARTER_PI);
  fill(random(255));

  
}
