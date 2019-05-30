//Image Demo
let direction = 1 
let x = 100;
let y = 600; 
let currentImage = 0;
walk = [] 
bullet = []
let shooot = 0
let bcurrentImage = 0
function preload() {
  for (let i = 0; i <= 13; i++){ 
    walk.push(loadImage("assets/walk/0" + i + ".png"));             
  }
   bullet.push(loadImage("assets/bullet/0.png"))
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(7) // speed switch images
}

function draw() {
  background(220);
  walkk()
  print(shooot,direction,currentImage)
  bullet2()
}

function walkk(){ 
  imageMode(CENTER); 
  push();
  translate(x, y); 
  scale(1.5);  
  if (direction === 1){  
    scale(-1,1)
    if(currentImage >= 8 ){
      currentImage = 1;
    }
    else {
      currentImage ++;
    }
  }
  if (direction === 2){ 
    if(currentImage >= 8){
      currentImage = 1;}
    else {
        currentImage ++; 
      }
  }
  if (shooot >= 1 && direction === 2){
    if(currentImage >= 12 || currentImage <= 8){
      currentImage = 9;}
   else{
        currentImage ++;
      }
   shooot -=1 
  }
  if (shooot >= 1 && direction === 1){
    //scale (-1,1)
    if(currentImage >= 12 || currentImage <= 8){
      currentImage = 9;}
   else{
        currentImage ++;
      }
   shooot -=1 
  } 
  image(walk[currentImage], 0, 0);
  pop();

}

function bullet2(){
  imageMode(CENTER);
  scale(0.15) 
  push();
  translate(x+300,y+3308); 
  if(shooot >= 1){
    for (let g = 0; g <= width; g++){ 
      translate(x+g,y+3308)
  }
}
  image(bullet[bcurrentImage], 0, 0);
  pop();
}
  
function keyPressed(){
  if (keyCode === RIGHT_ARROW){ // right side
    x += 20;
    direction = 2
  }
  if (keyCode === LEFT_ARROW){ // left side
    x -= 20;
    direction = 1
  }
  if(key === " " ){
    shooot += 1
  }
}