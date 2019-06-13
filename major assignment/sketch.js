//Image Demo
let direction = 1
let x = 100;
let y = 600;
let currentImage = 0;
let ecurrentImage = 0
let Marco 
let pArray = []
let bullet 
let shooot = 0
enemy = []

function preload() {
  Marco = createSprite(30, 400, 50, 100);
  Marco.addAnimation("moving","assets/walk/00.png","assets/walk/08.png");
  Marco.addAnimation("shooting","assets/shoot/09.png","assets/shoot/13.png");
  for(let p = 0; p <= 3; p++){
    enemy.push(loadImage("assets/enemy/0" + p + ".png")); 
  }
  bullet = loadImage("assets/bullet/0.png")
  backg =  loadImage("assets/background/backg2.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(7) // speed switch images
  
}

function draw() {
  imageMode(CORNER)
  image(backg,0,0);
  walkk()
  //print(shooot,direction,currentImage)
    for (let i = 0; i < pArray.length; i++){
      pArray[i].move();
      pArray[i].display();  
      if (pArray[i].isAlive() === false){
        pArray.splice(i,1);
        i--;  
      }
    }
}

function enemy2(){
  imageMode(CENTER); 
  push();
  translate(width/2,height/2)
  scale(1); 
  image(enemy[1], 0, 0);
  pop();
}

function walkk(){ 
  imageMode(CENTER); 
  push();
  scale(1.5);  
  if (keyIsDown('LEFT_ARROW')){  
    Marco.changeAnimation('moving');
    Marco.mirrorX(-1);
    Marco.velocity.x = -1 ;
  }
  if (keyIsDown('RIGHT_ARROW') ){ 
    Marco.changeAnimation('moving');
    Marco.mirrorX(1);
    Marco.velocity.x = 1;
  }
//   if (shooot >= 1 && direction === 2){
//     Marco.changeAnimation('shooting');
//     Marco.mirrorX(1);
//     shooot -=1 
//   }
//   if (shooot >= 1 && direction === 1){
//     Marco.changeAnimation('shooting');
//     Marco.mirrorX(-1);
//     shooot -=1 
//  }
 drawSprites();
}
  
// function keyPressed(){
//   if (keyCode === RIGHT_ARROW){ // right side
//     direction = 2
//   }
//   if (keyCode === LEFT_ARROW){ // left side
//     direction = 1
//   }
//   if(key === "z" ){
//     shooot = 5
//     pArray.push(new Particle(x, y));
//   }
//   if (key === "x"){
//     if( y === 600){
//       y -= 60 
//     }
//   }
// }

class Particle{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(map(x_,0, width,0,255),map(y_,0, height,0,255),map(x_,0, width,255,0));
    this.ySpeed = 0
    this.xSpeed = 100
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
    fill(this.c);
    push();
    translate(this.x,this.y);
    image(bullet,-100,-10,70,70);
    pop();
  }
}
