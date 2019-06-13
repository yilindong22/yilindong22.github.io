let GRAVITY = 1;
let Marco 
var JUMP = 10;
let bullets
let bullet = [];
let rotation = 0
let atc  
let SCENE_W = 1900 
let SCENE_H = 100
let enemy
Ex= 1800
Ey=  820
function preload() {
  Marco = createSprite();
  Marco.addAnimation("moving","assets/walk/00.png","assets/walk/08.png");
 atc =  Marco.addAnimation("shooting","assets/shoot/09.png","assets/shoot/13.png");
  bulletImage = loadImage("assets/bullet/0.png")
  backg =  loadImage("assets/background/backg2.png")
  enemyImage = loadImage("assets/enemy/01.png");

}

function setup() {
  //bullet = createSprite(Marco.position.x, Marco.position.y,);
  createCanvas(windowWidth, windowHeight);
  frameRate(60) // speed switch images  
  EnemY() 
}

function draw() {
  
  imageMode(CENTER)
  image(backg,900,500);
  walkk()
  drawSprites();
  if( atc.getFrame() == atc.getLastFrame()){
      Marco.changeAnimation('moving')
      atc.life = 40
  }
  camera.position.x = Marco.position.x*1.5
  if(Marco.position.x < 0){
     camera.position.x = 0
     if(Marco.position.x < -300){
       Marco.position.x = -300
     }
    }

  if(Marco.position.x > SCENE_W){
      Marco.position.x = SCENE_W;}
  if(Marco.position.y < SCENE_H){
      Marco.position.y = SCENE_H;}
  if(Marco.position.x > 1485 ){
    camera.position.x = 2227.5 
  }

  if(keyWentDown("z")){
    bullet.push(createSprite (Marco.position.x,Marco.position.y))
    //bullet.position.y = Marco.position.y
    
    bullet[bullet.length-1].addImage(bulletImage);
    bullet[bullet.length-1].setSpeed(10+Marco.getSpeed(),rotation);
    bullet[bullet.length-1].life = - windowWidth;
   }
   //
   for(i=0;i<bullet.length;i++){
    print(i, ": \t",bullet[i].position.x)
   }
}

function walkk(){ 
  imageMode(CENTER); 
  scale(1.5); 

  push();
  if(keyIsPressed === false){
     Marco.changeAnimation('moving');
    } 
  if(key==="z"){
    Marco.changeAnimation('shooting');   

    }
    
 
 

  if (keyIsDown(LEFT_ARROW)){  
    Marco.changeAnimation('moving');
    Marco.mirrorX(-1);
    Marco.velocity.x = -5  ;
    rotation = 180
  }
    if (keyIsDown(RIGHT_ARROW) ){ 
    Marco.changeAnimation('moving');
    Marco.mirrorX(1);
    Marco.velocity.x = 5 ;
    rotation = 0
  }

  if( y = 400 && keyIsPressed === false){
    Marco.velocity.x = 0 ;0
  }
  Marco.velocity.y += GRAVITY;
  if(Marco.position.y >= 400) {
    Marco.velocity.y = 0;
}

if(keyWentDown('x')){
  Marco.velocity.y = -JUMP;
}
}
function EnemY(){
  var enemy = createSprite(Ex, Ey);
  enemy.addImage(enemyImage);
}

