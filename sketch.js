const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bgimg, gift;

function preload()
{
  bgimg = loadImage("assets/bg2.png");
}

function setup() {
  createCanvas(1200,600)

  engine = Engine.create();
  world = engine.world;

  gift = new Objects(600,300);
}

function draw() 
{
  background(51);
  imageMode(CENTER);
  image(bgimg,600,300,1200,600);

  gift.display();
  Engine.update(engine);
}