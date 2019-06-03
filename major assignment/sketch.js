//Image Demo
let direction = 1
let x = 100;
let y = 600;
let currentImage = 0;
walk = []
let pArray = []
let bullet 
let shooot = 0

  function preload() {
  for (let i = 0; i <= 13; i++){ 
    walk.push(loadImage("assets/walk/0" + i + ".png"));             
  }
   bullet = loadImage("assets/bullet/0.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(7) // speed switch images
  noStroke()
}

function draw() {
  background(220);
  walkk()
  print(shooot,direction,currentImage)
  pArray.push(new Particle(x, y));
  for (let i = 0; i < pArray.length; i++){
    pArray[i].move();
    pArray[i].display();  
    if (pArray[i].isAlive() === false){
      pArray.splice(i,1);
      i--;  
    }
  }
}

function walkk(){ 
  imageMode(CENTER); 
  push();
  translate(x, y); 
  scale(1.5);  
  if (direction === 1 && shooot<1){  
    scale(-1,1)
    if(currentImage >= 8 ){
      currentImage = 1;
    }
    else {
      currentImage ++;
    }
  }
  if (direction === 2 && shooot < 1){ 
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
    scale (-1,1)
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
    shooot = 5
  }
}

function mouseClicked(){
  pArray.push(new Particle(x, y));
}
class Particle{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(map(x_,0, width,0,255),map(y_,0, height,0,255),map(x_,0, width,255,0));
    this.ySpeed = 0
    this.xSpeed = 15
    this.lifetime = windowWidth
    this.maxLifetime = this.lifetime;
    this.noiseLoc = 10;
  }
  move(){
    this.steps ++;
    this.lifetime -= 1;
    this.ySpeed += 0;
    this.x += (map(noise(this.noiseLoc),0,1,-1,1));
    this.noiseLoc += 0.01;
    this.x += this.xSpeed;
    this.y += this.ySpeed;

  }
  isAlive(){
    if (this.lifetime > 0) return true;
    else return false;
  }
  display(){
    ellipseMode(CENTER);
    fill(this.c);
    push();
    translate(this.x,this.y);
    //ellipse(0,0,this.size,this.size);
    image(bullet,0,0,200,200);
    pop();
  }
}
