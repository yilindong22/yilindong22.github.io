//Image Demo
let direction = 1 
let x = 100;
let y = 100; 
let currentImage = 0; 
MS = [] 
function preload() {
  for (let i = 0; i < 3; i++){ 

    MS.push(loadImage("assets/walk/01" + i + ".png"));             
  }

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10) // speed switch images
}



function draw() {
  background(220);
  MSs()
  }



function MSs(){ 
  
  imageMode(CENTER); 
  push();
  translate(x, y); // move trump
  scale(0.5); // size 
  if (direction === 1){  // if direction = 1 then trump move left 
    if(currentImage > 10 || currentImage < 6){
      currentImage = 6;
    }
    else {
      currentImage ++;
    }
  }
  if (direction === 2){ 
    if(currentImage < 1 || currentImage > 4){
      currentImage = 1;}
      else {
        currentImage ++; 
      }

  }
  image(MS[currentImage], 0, 0);
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

