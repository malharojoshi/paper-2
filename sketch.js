const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rightBox, leftBox, bottomBox, ground;
var trash;
function preload() {}

function setup() {
  createCanvas(1200, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Box(600, height, width, 20);
  trash = new Trash(300, 640);
  dustbin = new Dustbin(900, 650);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  trash.display();
  dustbin.display();
  // trash.depth = dustbin.depth - 1;
  if (keyDown(38)) {
    applyForce();
  }
}
function applyForce() {
  Matter.Body.applyForce(trash.body, trash.body.position, { x: 55, y: -80 });
}
