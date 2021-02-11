var PosX = 0;
var PosY = 0;
var squareX;
var squareY;
var squareSize = 65;
let speed = 15;
let speedy = 20;
let angle = 250;



function setup(){
    alert("The formal elements of this preoject are color and the movement of the squares. The user will be able to manipulate the size shape and colors of squares.\nHere are the controls: \n - Mouse Position will change the size of the shaking square \n - UP Arrow (pink & purple) \n - Down Arrow (purple & pink) \n - Left Arrow (yello & blue) \n - Right Arrow (blue & yellow) \n - Any Other key (all black)");
    createCanvas (windowWidth,windowHeight);
    PosX = random(0, windowWidth);
    PosY = random(0, windowHeight);
    squareX = 35;
    squareY = 35;
    background (0);
    
}

function draw(){
    
    let r1 = map(mouseY, 0, width, 0, height);
    let r2 = map(mouseX, 0, width, 0, height);
   
    translate(PosX,PosY);
    fill(0);
    stroke(120);
///colors for square
    if (keyCode === UP_ARROW) 
    {
        fill(121, 72, 162);
      } else if (keyCode === DOWN_ARROW)  
      {
        fill(232,142,214);
      } 
    if (keyCode === LEFT_ARROW)
    {
      fill(147, 196, 209);
    } else if (keyCode === RIGHT_ARROW)
    {
     fill(252, 228, 180);
   }

     square(squareX,squareY,squareSize);
      
/// colors for rectangle 
      fill(0);
    if (keyCode === UP_ARROW) 
    {
        fill(232,142,214);
      } else if (keyCode === DOWN_ARROW)  
      {
        fill(121, 72, 162);
      } 
      
    if (keyCode === LEFT_ARROW)
    {
       fill(252, 228, 180);
    } else if  (keyCode === RIGHT_ARROW)
       fill(147, 196, 209);
   {

   }
    rotate(angle);
      rect(squareX,squareY,r2,r1)
  
   
   if (PosX > windowWidth - 25 || PosX < 25 ) {     
        speed = speed * -1; 
            
    }
    if (PosY > windowHeight - 25 || PosY < 25 ) {
        speedy = speedy * -1;
         
    }    
    
    PosX = PosX + speed;
    PosY = PosY + speedy; 
    angle = angle + .1;
    
}

  


