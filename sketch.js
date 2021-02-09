var PosX = 0;
var PosY = 0;
var squareX;
var squareY;
var squareSize = 65;
let speed = 15;
let speedy = 20;
let angle = 250;

function setup(){
    alert("I wanted the user to be able to manipulate the shape and the color of the square: When any key is pressed it inverts the square colors and when the mouse is moved in th x or y position it will increase the size and lenght of the squares. ");
    createCanvas (windowWidth,windowHeight);
    PosX = random(0, windowWidth);
    PosY = random(0, windowHeight);
    squareX = 10;
    squareY = 8;
    background(151, 68, 230); 
    ///background(156, 222, 236);
}

function draw(){
    let r1 = map(mouseY, 0, width, 0, height);
    let r2 = map(mouseX, 0, width, 0, height);
    
  stroke(112);
  
    translate(PosX,PosY);
   
    if (keyIsPressed === true) {
        fill(235, 165, 191);
      } else  {
        fill(209, 213, 242);
      } 
      circle(squareX,squareY,squareSize);
  
    rotate(angle);
  
    
   if (keyIsPressed === true)  {
       fill (209, 213, 242);
   }else {
    fill(235, 165, 191);
   }
    rect(squareX,squareY,r2,r1)
  
   if (PosX > windowWidth - 25 || PosX < 25 ) {     
        speed = speed * -1; 
            
    }
    if (PosY > windowHeight - 25 || PosY < 25 ) {
        speedy = speedy * -1;
         
    }    
    PosX = PosX + speed;
    PosY = PosY + speedy; 
    angle = angle + .5;
    
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      PosX=PosY+20+ speed;
    } else if (keyCode === RIGHT_ARROW) {
    PosX = PosX;
    }
  
 }

