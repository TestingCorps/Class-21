var movingRect, fixedRect;
var square1, square2;
var ball1,ball2;

function setup() {
  createCanvas(1000,400);
  fixedRect1 = createSprite(200, 200, 50, 50);
  fixedRect1.shapeColor="green";
  fixedRect2 = createSprite(400, 200, 50, 50);
  fixedRect2.shapeColor="green";
  fixedRect3 = createSprite(600, 200, 50, 50);
  fixedRect3.shapeColor="green";
  fixedRect4 = createSprite(800, 200, 50, 50);
  fixedRect4.shapeColor="green";
  movingRect = createSprite(200, 200, 80, 40);
  movingRect.shapeColor="green";

  square1 = createSprite(100,100,30,30);
  square1.shapeColor="purple";
  square1.velocityX = 5;
  square2 = createSprite(700,100,30,30);
  square2.shapeColor="blue";
  square2.velocityX = -5;

  ball1 = createSprite(200,300,10,50);
  ball1.shapeColor="black";
  ball2 = createSprite(800,300,20,20);
  ball2.shapeColor="teal";
  ball2.velocityX = -5;
}

function draw() {
  background(225,225,225);

  movingRect.x = mouseX
  movingRect.y = mouseY
  
  isTouching(fixedRect4,movingRect);

  bounce(square1,square2);

  bounceOff(ball1,ball2);

  drawSprites();
}

