// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond

function myConstrain(a,b,c){
  while (a >= b && a <= c) print (a)
  while (a < b ) print (b)
  while (a > c) print (c)

              
   

}

function setup() {
  createCanvas(400 , 400);
  noLoop();

}

function draw() {
  print (myConstrain(50, 0, 100));   //prints 50
  print (myConstrain(1, 5, 10));   //prints 5
  print (myConstrain(-100, -300, -200));   //prints -200
  print (myConstrain(mouseX, 0, 200));   //prints values beween 0-200
  
  
}
