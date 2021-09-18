var road,road1;
function preload(){
  //pre-load images
  road1 = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200);
  road.scale=4;
  road.addAnimation("road")

}

function draw() {
  background(0);
  drawSprites();
}
