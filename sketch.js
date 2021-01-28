var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  //bullet.shapeColor = "red";
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(200,200,50,50)
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";
}

function draw() {
  background("black");

  touching();
  drawSprites();
}
function touching(){
  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5* weight * speed*speed/(thickness*thickness*thickness);

    if(damage > 10){
      //bullet.shapeColor = "red";
      wall.shapeColor = "red";
    }
    if(damage < 10){
      //bullet.shapeColor = "green";
      wall.shapeColor = "green";
    }
  }
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}