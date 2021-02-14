const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var ball, slingshot;
var wall;

function preload(){
    jcbImage=loadImage("sprites/jcb1.png");
}


function setup(){
    var canvas = createCanvas(1700,800);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(850,height,1700,30);
    wall = new Ground(260,750,30,300)
    ball = new Ball(100,300,80,80);

    box1  = new Box(1200,100,70,70);
    box2  = new Box(1200,100,70,70);
    box3  = new Box(1200,100,70,70);
    box4  = new Box(1200,100,70,70);
    box5  = new Box(1200,100,70,70);
    box6  = new Box(1200,100,70,70);
    box7  = new Box(950,100,70,70);
    box8  = new Box(950,100,70,70);
    box9  = new Box(950,100,70,70);
    box10 = new Box(950,100,70,70);
    box11 = new Box(950,100,70,70);
    box12 = new Box(950,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(700,100,70,70);
    box17 = new Box(700,100,70,70);
    box18 = new Box(700,100,70,70);
    box19 = new Box(700,100,70,70);
    box20 = new Box(700,100,70,70);
    
    
    
    slingshot = new SlingShot(ball.body,{x:380, y:310});
}

function draw(){
        background(0);
    
        
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ground.display();
    wall.display();
    
    slingshot.display();    

    ball.display();
    image(jcbImage,2,300,400,550)

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}