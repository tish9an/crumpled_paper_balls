
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftWall;
var rightWall;
var rightEdge;
var leftEdge;
var ceiling;





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ground_options= {
		isStatic:true,
	}

	var ceiling_options= {
		isStatic:true,
		visible:false,

	}

    var ball_options= {
		isStatic:false,
		resitution:0,
		friction:0.5,
		density:1.2,
	}   
	
	ground = Bodies.rectangle(width/2,690,width,20,ground_options);
	World.add(world,ground);
	
	ball = Bodies.circle(200,200,10,ball_options);
    World.add(world,ball);

	rightWall = Bodies.rectangle(600,650,20,60,ceiling_options);
	World.add(world,rightWall);

	leftWall = Bodies.rectangle(450,650,20,60,ceiling_options);
	World.add(world,leftWall);

	rightEdge = Bodies.rectangle(790,330,20,700,ceiling_options);
	World.add(world,rightEdge);

	leftEdge = Bodies.rectangle(10,330,20,700,ceiling_options);
	World.add(world,leftEdge);

	ceiling = Bodies.rectangle(width/2,10,width,20,ceiling_options);
	World.add(world,ceiling);






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  ellipse(ball.position.x,ball.position.y,25);
  rect(ground.position.x,ground.position.y,800,20);
  rect(rightWall.position.x,rightWall.position.y,20,60);
  rect(leftWall.position.x,leftWall.position.y,20,60);
  rect(leftEdge.position.x,leftEdge.position.y,20,700);
  rect(rightEdge.position.x,rightEdge.position.y,20,700);
  rect(ceiling.position.x,ceiling.position.y,800,20);
  
  drawSprites();


 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.9,y:0});
	}

}