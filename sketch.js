var fixedBox, movingBox, box3, box4;
var bounceObj1, bounceObj2;


function setup() {
  createCanvas(800, 400);
  fixedBox = createSprite(100, 200, 50, 100);

  movingBox = createSprite(300, 200, 100, 50);

  bounceObj1 = createSprite(100, 300, 100, 50);
  bounceObj1.velocityX = 5;

  bounceObj2 = createSprite(300, 300, 100, 50);
  bounceObj2.velocityX = (-5);
  bounceObj2.shapeColor = "yellow";
  
  bounceOffObj1 = createSprite(100, 100, 100, 50);
  bounceOffObj1.velocityX = 2;

  bounceOffObj2 = createSprite(300, 100, 100, 50);
  bounceOffObj2.shapeColor = "blue";

  box3 = createSprite(50, 50, 30, 30);
  box3.shapeColor = "yellow";

  box4 = createSprite(250, 250, 70, 70);
  box4.shapeColor = "blue";

  fixedBox.shapeColor = "green";
  movingBox.shapeColor = "green";
  // fixedBox.debug = true;
  // movingBox.debug = true;
}

function draw() {
  background(255, 255, 255);
  movingBox.x = mouseX;
  movingBox.y = mouseY;
  // console.log((movingBox.width + fixedBox.width) / 2);
  // console.log(movingBox.x - fixedBox.x);
  // console.log(fixedBox.x - movingBox.x);

  console.log((movingBox.height + fixedBox.height) / 2);
  // console.log(movingBox.y - fixedBox.y);
  // console.log(fixedBox.y - movingBox.y);

  if(isTouching(movingBox, box3))
  {
    console.log("-----------Sprite Is touching-------------");
  }

  bounce(bounceObj1, bounceObj2)
  bounceOff(bounceOffObj1, bounceOffObj2)

  drawSprites();
}