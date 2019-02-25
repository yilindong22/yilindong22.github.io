// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let randomS;  // random size 
let randomX; // random X position 
let randomY; // random Y position
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textStyle(BOLD);
  text('word', 10, 30);


 
}
function draw (){
  randomX = random(0,1500)
  randomS = random(0,100)
  randomY = random(0,800)
}

function keyTyped(){
  if (key==="a")
  rect(mouseX,mouseY,75,100);
  
  if (key==="b")
  ellipse(mouseX,mouseY,75,100);
  if (key==="d")
  arc(mouseX,mouseY,80, 80, 0, PI + QUARTER_PI);
  fill(random(0,255),random(0,255),random(0,255),);
  if (key === " ")
  background(255)
  if (key==="p")
  rect(randomX,randomY,randomS,randomS);
}
