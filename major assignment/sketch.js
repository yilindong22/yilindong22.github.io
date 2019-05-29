//Image Demo
let direction = 1 
let x = 100;
let y = 600; 
let currentImage = 0; 
walk = [] 
function preload() {
  for (let i = 0; i <= 8; i++){ 
    walk.push(loadImage("assets/walk/0" + i + ".png"));             
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10) // speed switch images
}

function draw() {
  background(220);
  walkk()
}

function walkk(){ 
  imageMode(CENTER); 
  push();
  translate(x, y); // move trump
  scale(1.5); // size 
  if (direction === 1){  // if direction = 1 then trump move left 
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
  print(currentImage,direction)
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
}

