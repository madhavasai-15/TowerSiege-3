const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BackGroundImage;
var ground;
var base1;
var block1,  block2,  block3,  block4,  block5,  block6,  block7,  block8,  block9, 
    block10, block11, block12, block13, block14, block15, block16, block17, block18, block19,
    block20, block21, block22, block23, block24, block25;
var polygon, polygonImage;
var slingShot;
var score = 0;

function preload(){
  polygonImage = loadImage("polygon.png");
  BackgroundChange();
}


function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 575, 1000, 50, 240, 240, 240);
  
  base1 = new Ground(380, 330, 230, 20, 183, 65, 65);

  block1 = new Block(290, 300, 30, 40, 135, 206, 234);
  block2 = new Block(320, 300, 30, 40, 135, 206, 234);
  block3 = new Block(350, 300, 30, 40, 135, 206, 234);
  block4 = new Block(380, 300, 30, 40, 135, 206, 234);
  block5 = new Block(410, 300, 30, 40, 135, 206, 234);
  block6 = new Block(440, 300, 30, 40, 135, 206, 234);
  block7 = new Block(470, 300, 30, 40, 135, 206, 234);
  block8 = new Block(320, 260, 30, 40, 255, 192, 203);
  block9 = new Block(350, 260, 30, 40, 255, 192, 203);
  block10 = new Block(380, 260, 30, 40, 255, 192, 203);
  block11 = new Block(410, 260, 30, 40, 255, 192, 203);
  block12 = new Block(440, 260, 30, 40, 255, 192, 203);
  block13 = new Block(350, 220, 30, 40, 62, 223, 207);
  block14 = new Block(380, 220, 30, 40, 62, 223, 207);
  block15 = new Block(410, 220, 30, 40, 62, 223, 207);
  block16 = new Block(380, 180, 30, 40, 127, 127, 127);

  base2 = new Ground(785, 200, 190, 20, 183, 65, 65);

  block17 = new Block(710, 170, 30, 40, 135, 206, 234);
  block18 = new Block(740, 170, 30, 40, 135, 206, 234);
  block19 = new Block(770, 170, 30, 40, 135, 206, 234);
  block20 = new Block(800, 170, 30, 40, 135, 206, 234);
  block21 = new Block(830, 170, 30, 40, 135, 206, 234);
  block22 = new Block(740, 130, 30, 40, 62, 223, 207);
  block23 = new Block(770, 130, 30, 40, 62, 223, 207);
  block24 = new Block(800, 130, 30, 40, 62, 223, 207);
  block25 = new Block(770, 100, 30, 40, 127, 127, 127);

  var options = {
    'isStatic': false,
    'restitution':0.8,
    'friction':1.0,
    'density':2
  }
  polygon = Bodies.circle(50, 200, 20, options);
  World.add(world, polygon);
  
  slingShot = new SlingShot(this.polygon, {x: 100, y: 200})

}

function draw() {
  if(BackGroundImage){
    //background(BackGroundImage);  
    background(70, 45, 45);
  }
  Engine.update(engine);

  textSize(32);
  fill("white");
  text("Score: " + score, 750, 40);

  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();
  block8.Score();
  block9.Score();
  block10.Score();
  block11.Score();
  block12.Score();
  block13.Score();
  block14.Score();
  block15.Score();
  block16.Score();
  base1.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block17.Score();
  block18.Score();
  block19.Score();
  block20.Score();
  block21.Score();
  block22.Score();
  block23.Score();
  block24.Score();
  block25.Score();
  base2.display();
  slingShot.display();
}
 
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(this.polygon, {x: 100, y: 200});
      slingShot.attach(this.polygon);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

async function BackgroundChange(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var dt = responseJSON.datetime;
  var hour = dt.slice(11, 13);

  if(hour >= 06 && hour < 19){
    BackGroundImage = loadImage("Day.png");
  }else {
    BackGroundImage = loadImage("Night.png");
  }
  
}