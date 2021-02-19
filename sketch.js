var helicopterIMG, helicopterSprite, packageSprite,packageIMG,zombiePNG,zombieSprite;
var packageBody,ground,zombie,helicopter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	zombiePNG=loadImage("zombie.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	zombieSprite=createSprite(750, 610, 10,10);
	zombieSprite.scale=0.2;
	zombieSprite.addImage(zombiePNG);

	bottom=createSprite(390, 665,200,10);
    bottom.shapeColor="red";
  

	side=createSprite(485, 615, 10,100);
	side.shapeColor="red";

	

	side1=createSprite(295, 615, 10,100);
	side1.shapeColor="red";



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	zombie= Bodies.rectangle(50, 650, width, 10 , {isStatic:true} );
 	World.add(world, zombie);

	helicopter= Bodies.rectangle(width/2, 200, 10,10,{isStatic:true} );
 	World.add(world, helicopter);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  packageSprite.collide(side,side1,bottom);
  drawSprites();
  if (keyDown("RIGHT_ARROW"))
  {
	helicopterSprite.x = helicopterSprite+5;
	helicopterSprite.x = helicopter;
  }
  if (keyDown("Left_ARROW"))
  {
	helicopterSprite.x = helicopterSprite-5;
	helicopterSprite.x = helicopter;
  }
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW ) 
 {
    Matter.Body.setStatic(packageBody,false);
 }
}



