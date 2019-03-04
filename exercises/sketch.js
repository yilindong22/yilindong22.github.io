// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond

function myConstrain(a,b,c){
  if (a >= b && a <= c) return (a)
  if (a < b ) return (b)
  if (a > c) return (c)

              
   

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

//function myConstrain(a,b,c){
  //if (a >= b && a <= c) return (a)
  //if (a < b ) return (b)
  //if (a > c) return (c)

              
   

//}

//function setup() {
  //createCanvas(400 , 400);

//}

//function draw() {

  //print (myConstrain(mouseX, 0, 200));   //prints values beween 0-200
  
  
//}