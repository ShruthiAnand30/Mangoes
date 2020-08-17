const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    mango = new Mango(810, 350);
	mango3 = new Mango(810, 220);
	mango2 = new Mango(810, 310);

	stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    boy = new Boy(boy.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
	ground.display();
	
    mango.display();
    mango2.display();

    stone.display();

    boy.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    boy.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}


