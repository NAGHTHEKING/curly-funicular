const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 350, 300, 150);

    box7 = new Box(900,320,70,70);
    box8 = new Box(1120,320,70,70);
    pig4 = new Pig(1010, 350);
    log4 = new Log(1010,260,300, PI/2);

    box555 = new Box(900,240,70,70);
    box1333 = new Box(1120,240,70,70);
    pig31 = new Pig(1010, 220);

    log12 =  new Log(1010,180,300, PI/2);

    box54 = new Box(1010,160,70,70);
    log44 = new Log(960,120,150, PI/7);
    log55 = new Log(1070,120,150, -PI/7);
/////////////////////////////////////////////////////////////////////
    
    box1 = new Box(500,320,70,70);
    box2 = new Box(710,320,70,70);
    pig1 = new Pig(610, 350);
    log1 = new Log(610,260,300, PI/2);
 
    box3 = new Box(500,240,70,70);
    box4 = new Box(720,240,70,70);
    pig3 = new Pig(610, 220);

    log3 =  new Log(610,180,300, PI/2);


    box5 = new Box(610,160,70,70);
    log1114 = new Log(560,120,150, PI/7);
    log5 = new Log(670,120,150, -PI/7);
    bird = new Bird(150,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    //log1.display();
    box3.display();
    box4.display();
    pig3.display();
    //log3.display();

    box5.display();
    // log1114.display();
    // log5.display();
    box7.display();
    box8.display();
    pig4.display();
    //log4.display();

    box555.display();
    box1333.display();
    pig31.display();
 
   // log12.display();

    box54.display();
    // log44.display();
    // log55.display();
    
    bird.display();
   // platform.display();
    //log6.display();
  //  slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(bird.body)
    }
}