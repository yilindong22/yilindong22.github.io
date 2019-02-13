// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0; // 0-top 1-right 2- bottom 3-left
let rectSize = 30;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  if (state === 0){//top
    x += 10
      if (x > windowWidth - rectSize) state = 1;


}
else if (state === 1){// right 
  y += 10
   if (y > windowHeight - rectSize ) state = 2


}
else if (state === 2){// bottom 
  x -= 10
   if (x <= 0) state = 3
}
else if (state === 3){// left 
  y -= 10
   if (y <= 0) state = 4
}
rect(x,y,rectSize,rectSize)
}

