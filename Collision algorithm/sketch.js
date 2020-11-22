//collision detection between moving rectangle and fixed rectangle
var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect =  createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = ("cyan");
  movingRect = createSprite(600, 200, 50, 80);
  movingRect.shapeColor = ("cyan");
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.shapeColor = ("green");
      movingRect.shapeColor = ("green");
  }
  else{
    fixedRect.shapeColor = ("cyan");
    movingRect.shapeColor = ("cyan");
  }



  drawSprites();
}