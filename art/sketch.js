let w // width of the ellipse in the middle
let h // height of the ellipe in the middle
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(255, 255, 255, 50);
}

function draw() {
  flower();
  key1()
}

function flower() { // the function to draw the flower
  w = tan(frameCount) * 100;
  h = sin(frameCount) * 100;
  translate(width/2, height/2); // posstion 
  for (i = 0; i < 3; i++) {
    rotate(radians(360 / 3));
    ellipse(0, 0, w, h);
  }
}

function key1(){ //press the mouse to save the picture
  if (mouseIsPressed){
    save()
  }
}
