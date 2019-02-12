// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let img;
let imgSize;
function preload(){
  img = loadImage("assets/gear.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  imgSize = 200;
}

function draw() {
  background(220);
  image(img,mouseX,mouseY,imgSize,imgSize);
}
function mouseWheel(event){
  if(event.delta > 0){
  imgSize += 25;

} 
  else{
    if(imgSize > 25){
    imgSize -= 25;
  
  }
}
}