const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig3;
var bird;
var log1, log2, log3, log4, log5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,1200,20)
    pig1 = new Pig(810, 350); 
    log1 = new Tronco(810,260,300, PI/2); 
    box3 = new Box(700,240,70,70); 
    box4 = new Box(920,240,70,70); 
    pig3 = new Pig(810, 220); 
    log3 = new Tronco(810,180,300, PI/2); 
    box5 = new Box(810,160,70,70); 
    log4 = new Tronco(760,120,150, PI/7); 
    log5 = new Tronco(870,120,150, -PI/7); 
    bird = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    
}