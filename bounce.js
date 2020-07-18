/* global p5 */

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => {});

/*
Today's topics:

+ Variables
+ The draw() loop
+ Conditional statements
+ Hard-coded values

*/ 

let x, y, xVelocity, yVelocity, yAcceleration, r, g, b;
let x2, y2, x2Velocity, y2Velocity, r2, g2, b2;
let x3, y3, x3Velocity, y3Velocity, r3, g3, b3;


// WAS: function setup() { ... }
p.setup = function () {
  p.createCanvas(800, 600);

  yAcceleration=0;
  //Ball1
  x=50;
  y=50;
  xVelocity=3;
  yVelocity=0;
  yAcceleration=1;
  r=Math.random()*256;
  g=Math.random()*256;
  b=Math.random()*256;
  
  //Ball2
  x2=400;
  y2=300;
  x2Velocity=3;
  y2Velocity=1;
  r2=Math.random()*256;
  g2=Math.random()*256;
  b2=Math.random()*256;
  
  //Ball3
  x3=550;
  y3=200;
  x3Velocity=3;
  y3Velocity=1;
  r3=Math.random()*256;
  g3=Math.random()*256;
  b3=Math.random()*256;
  
}


// WAS: function draw() { ... }
p.draw = function () {
  p.background(220);
  
  //Ball1
  p.fill(r,g,b);
  p.ellipse(x,y,50)
  if(x>=775 || x<=25){ 
    xVelocity*=-1;
  }
  if(y>=575 || y<=25){//statement checking if the box is going off the screen
    yVelocity*=-1;
    yVelocity-=1;
    //y=575;
    r=Math.random()*256;
    g=Math.random()*256;
    b=Math.random()*256;
  }
  yVelocity+=yAcceleration
  x+=xVelocity;
  y+=yVelocity;
  
  //Ball2
  p.fill(r2,g2,b2);
  p.ellipse(x2,y2,50)
  if(x2>=775 || x2<=25){ 
    x2Velocity*=-1;
  }
  if(y2>=575 || y2<=25){
    y2Velocity*=-1;
    y2Velocity-=1;
    //y=575;
    r2=Math.random()*256;
    g2=Math.random()*256;
    b2=Math.random()*256;
  }
  y2Velocity+=yAcceleration
  x2+=x2Velocity;
  y2+=y2Velocity;
  
  //Ball3
  p.fill(r3,g3,b3);
  p.ellipse(x3,y3,50)
  if(x3>=775 || x3<=25){ 
    x3Velocity*=-1;
  }
  if(y3>=575 || y3<=25){
    y3Velocity*=-1;
    y3Velocity-=1;
    r3=Math.random()*256;
    g3=Math.random()*256;
    b3=Math.random()*256;
  }
  y3Velocity+=yAcceleration
  x3+=x3Velocity;
  y3+=y3Velocity;
  
  
}
