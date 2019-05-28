//Image Demo
let direction = 1 // direction of trump
let x = 100;// x value of trump
let y = 100; // y value of trump
let currentImage = 0; // current image showing on the screen 
trump = [] // images of trump
function preload() {
  for (let i = 0; i < 24; i++){ // 24 images

    trump.push(loadImage("assets/trump-0" + i + ".png"));             
  }

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10) // speed switch images
}



function draw() {
  background(220);
  trumps()
  }



function trumps(){ 
  
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
  if (direction === 2){ // if direction = 2 then trump move right
    if(currentImage < 1 || currentImage > 4){
      currentImage = 1;}
      else {
        currentImage ++; 
      }

  }
  if (direction === 3){ // if direction = 3 then trump move down
    if(currentImage > 16 || currentImage < 12){
      currentImage = 12;
    }
    else {
      currentImage ++;
    }
  }
  if (direction === 4){ // if direction = 4 then trump move up
    if(currentImage > 22 || currentImage < 17){
      currentImage = 18;
    }
   else{
     currentImage ++;
    }
   }
 
  image(trump[currentImage], 0, 0);
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
  if (keyCode === DOWN_ARROW){ // downward
    y += 20;
    direction = 3
  }
  if (keyCode === UP_ARROW){ // upward
    y -= 20;
    direction = 4
  }

}

