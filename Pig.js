class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,60,60);
    this.image = loadImage("sprites/enemy.png");
    this.something=255;

  }
 display () {
  
   if (this.body.speed<3){
super.display()
   }
   else { 
     push ()
    World.remove (world,this.body)
    this.something=this.something-10;
    tint(255,this.something)
  image (this.image,this.body.position.x,this.body.position.y,50,50) 
  pop ()
  }

 }
};

