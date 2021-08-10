class log extends base{
  constructor(x,y,height,angle){
    super(x,y,10,height,angle);
    
    Matter.Body.setAngle(this.body, angle);
    
    this.image = loadImage("wood2.png");
   
    
    }
    }
    