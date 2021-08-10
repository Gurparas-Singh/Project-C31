const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
   world = engine.world;

  ground = new Ground(240,795,480,10);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

  ground.display();

  drawSprites();
}