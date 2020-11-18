
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;
var ball;
var ground;

function setup() 
{
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,480,800,20);

	box1 = new Dustbin(550,470,150,20);

	box2 = new Dustbin(470,430,20,100);
	box3 = new Dustbin(630,430,20,100);

	ball = new Paper(200,100, 20);
	
}


function draw() 
{
  background(0);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  
  ball.display();
  
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position, {x:50,y:-50});
	}
}



