let w
let h

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(255, 255, 255, 50);
}

function draw() {
  flower();
}

function flower() {
  w = tan(frameCount) * 100;
  h = sin(frameCount) * 100;
  translate(width/2, height/2);
  
  for (i = 0; i < 3; i++) {
    rotate(radians(360 / 3));
    ellipse(0, 0, w, h);
  }
}

