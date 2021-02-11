class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/woood.png");
    this.someone=255;
  }
  display () {
  
    if (this.body.speed<4){
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
