var fixedRect, movingRect,car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,300,50,50);
  wall= createSprite(1000,300,50,100);
  
  car.velocityX=10;
  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
   
  if (isTouching(movingRect,fixedRect)){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
  }
  if (isTouching(car,wall)){
    textSize(30);
    text("touched",600,600);
  }
  
  collide(car,wall);
  bounceOff(car,wall);



  drawSprites();
}




