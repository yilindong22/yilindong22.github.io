// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let buttonX,buttonY,buttonSize;
let rectX,rectY,rectW,rectH;
let rectShade = 0;
let fadeIn = false;
let buttonOver = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width/2;
  buttonY = height/4;
  buttonSize = 50;
  rectX = width/2;
  rectY = height*0.6;
  rectW = width/2;
  rectH = height*0.5;
  noStroke()
  rectMode(CENTER);
  ellipseMode(CENTER);

}
function mouseDistance(x1,y1,x2,y2){
 let a =abs(x1-x2);
 let b =abs(y1-y2);
 let c =sqrt(sq(a)+ sq(b));
 return c;
}
function mousePressed(){
  if (buttonOver){
    fadeIn = fadeIn
  }
}

function draw() {
  print(mouseDistance(mouseX,mouseY,buttonX,buttonY))
  background(255);
  //button
  if(mouseDistance(mouseX),(mouseY),(buttonX),(buttonY),(buttonSize)){
  fill(200,40,50)
  buttonOver = true;
  }
  else{
    fill(160,30,30)
  }
  ellipse(buttonX,buttonY,buttonSize,buttonSize)
  //if (frameCount % 2 === 0){
    if (fadeIn){
      rectShade -= 2;
    }
  rectShade += 2;
  //}
  rectShade = constrain(rectShade, 0, 255)

  fill(rectShade);
  rect(rectX,rectY,rectW,rectH);
}

