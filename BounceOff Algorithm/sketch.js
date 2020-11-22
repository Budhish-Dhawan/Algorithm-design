//bounceOff between moving rectangle and fixed rectangle
var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);

  fixedRect =  createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = ("cyan");
  fixedRect.velocityY = 5;

  movingRect = createSprite(400, 800, 50, 80);
  movingRect.shapeColor = ("cyan");
  movingRect.velocityY = -5;
}

function draw() {
  background(0);  


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
  }
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);
    }


  drawSprites();
}