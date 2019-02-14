// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textStyle(BOLD);
  text('word', 10, 30);
  fill(0, 102, 153);  
 
}
function keyTyped(){
  if (key==="a")
  rect(mouseX,mouseY,75,100);
  
  if (key==="b")
  ellipse(mouseX,mouseY,75,100);
  if (key==="d")
  arc(mouseX,mouseY,80, 80, 0, PI + QUARTER_PI);
  fill(random(255));
  if (key === "")
  rect();
  
}
